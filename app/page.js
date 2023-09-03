import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full items-start mt-7 md:mt-0 md:items-center justify-center">
      <section className="flex flex-col w-[322px] h-[495px] bg-white rounded-3xl">
        <div className="rounded-3xl p-4">
          <Link href="https://www.frontendmentor.io/challenges">
            <Image
              src="/image-qr-code.png"
              alt="QRcode"
              className="rounded-xl"
              width={576}
              height={576}
            />
          </Link>
        </div>

        <div className="flex flex-col px-8  mt-1.5 text-center">
          <h1 className="font-bold text-[1.35rem]/[1.7rem] text-dark_blue mb-4">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-grayish_blue text-base/[1.4rem]">
            Scan the QR code to visit FrontEnd Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
    </main>
  );
}
