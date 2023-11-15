import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full items-start p-4 md:p-0 mt-7 md:mt-0 md:items-center justify-center ">
      <section className="flex flex-col justify-center  text-center md:max-w-md pb-7 bg-white rounded-3xl">
        <Link
          className="rounded-xl p-4"
          href="https://www.frontendmentor.io/challenges"
        >
          <Image
            src="/image-qr-code.png"
            alt="QRcode pointing to www.frontendmentor.io"
            className="rounded-xl mx-auto"
            width={285}
            height={285}
          />
        </Link>
        <h1 className="font-bold text-xl text-dark_blue">
          Improve your front-end
        </h1>
        <h1 className="font-bold text-xl text-dark_blue mb-4">
          skills by building projects
        </h1>
        <p className="text-grayish_blue text-base">
          Scan the QR code to visit FrontEnd
        </p>
        <p className="text-grayish_blue text-base">
          Mentor and take your coding skills
        </p>
        <p className="text-grayish_blue text-base">to the next level</p>
      </section>
    </main>
  );
}
