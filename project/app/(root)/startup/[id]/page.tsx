import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formateDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";

const md = markdownit();

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="w-full bg-[#F41B7B] bg-[url('/stripe.svg')] bg-repeat flex justify-center items-center flex-col py-10 px-6 text-white">
        <p className="bg-[#FEE440] text-black px-4 py-1 text-sm font-bold rounded-sm uppercase">
          {formateDate(post?._createdAt)}
        </p>

        <h1 className="uppercase bg-black px-6 py-4 font-bold text-white sm:text-[48px] text-[30px] text-center mt-4">
          {post.title}
        </h1>

        <p className="mt-4 text-center text-white text-lg max-w-2xl">
          {post.description}
        </p>
      </section>

      <section className="px-6 py-10 max-w-6xl mx-auto">
        <img
          src={post.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl shadow-xl"
        />

        <div className="space-y-6 mt-10 max-w-4xl mx-auto">
          <div className="flex justify-between items-center gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-3 items-center"
            >
              <Image
                src={post.author?.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full border-2 border-black"
              />

              <div>
                <p className="text-lg font-semibold">{post.author?.name}</p>
                <p className="text-sm text-gray-500">@{post.author?.username}</p>
              </div>
            </Link>

            <p className="bg-pink-100 text-pink-700 font-semibold px-4 py-2 rounded-full">
              {post.category}
            </p>
          </div>

          <h3 className="text-2xl font-bold">Pitch Details</h3>

          {parsedContent ? (
            <article
              className="prose prose-p:text-black prose-headings:text-black"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="text-gray-500 text-sm">No details provided</p>
          )}
        </div>

        <hr className="border-dotted border-gray-300 my-12 max-w-4xl mx-auto" />

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          {/* <View id={id} /> */}
        </Suspense>
      </section>
    </>
  );
};

export default Page;
