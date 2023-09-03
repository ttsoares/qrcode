import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full items-start mt-7 md:mt-0 md:items-center justify-center">
      <section className="flex flex-col w-[325px] h-[500px] bg-white rounded-3xl">
        <div className="rounded-3xl p-5">
          <Link href="https://www.ufrgs.br">
            <Image
              src="/image-qr-code.png"
              alt="QRcode"
              className="rounded-xl"
              width={576}
              height={576}
            />
          </Link>
        </div>

        <div className="flex flex-col px-8 text-center">
          <h1 className="font-bold text-xl text-dark_blue mb-4">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-grayish_blue">
            Scan the QR code to visit FrontEnd Mentor and take your coding to
            the next level
          </p>
        </div>
      </section>
    </main>
  );
}
