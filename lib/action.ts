"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (
  state: { error: string; status: string },
  form: FormData,
  pitch: string
) => {
  // 1️⃣ Check if the user is signed in
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  // 2️⃣ Convert FormData to a regular object and remove the 'pitch' field
  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  // 3️⃣ Create a URL-friendly slug from the title
  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    // 4️⃣ Prepare the startup object to store in Sanity
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };

    // 5️⃣ Create a new document in Sanity
    const result = await writeClient.create({ _type: "startup", ...startup });

    // 6️⃣ Return a JSON-safe response with status SUCCESS
    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    // 7️⃣ Return a JSON-safe response with status ERROR if something goes wrong
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
