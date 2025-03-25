import { Instagram } from "iconsax-react";
import Link from "next/link";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-toby-forest-ash">
      <div className="grid m-6 md:grid-cols-2 min-h-[452px]">
        <div className="flex flex-col md:justify-between">
          <div className="grid md:grid-cols-2 font-mourich text-xl text-toby-frosted-pearl tracking-tight font-semibold">
            <Link href="">HOME</Link>
            <Link href="">CONTACT US</Link>
            <Link href="">ABOUT US</Link>
          </div>
          <div className="flex md:flex-col gap-3 mt-12">
            <Instagram color="#f7f4e8" size="24" />
            <Image src="tiktok.svg" alt="Tiktok" width={18} height={18} />
          </div>
        </div>
        <div className="flex flex-col md:justify-between">
          <div>
            <hr className="border-toby-frosted-pearl mt-3 md:mt-0 opacity-20" />
            <div className="grid md:grid-cols-2">
              <div>
                <div className="font-mourich text-toby-frosted-pearl text-sm mt-6 font-semibold">
                  <p>08123123987123</p>
                  <p>TobyHolding@gmail.com</p>
                </div>
                <div className="font-mourich text-toby-frosted-pearl text-sm mt-8 font-semibold flex flex-col gap-2">
                  <Link className="flex gap-2" href="">
                    Instagram <ArrowUpRight color="#f7f4e8" size={18} />
                  </Link>
                  <Link className="flex gap-2" href="">
                    Tiktok <ArrowUpRight color="#f7f4e8" size={18} />
                  </Link>
                  <Link className="flex gap-2" href="">
                    Whatsapp <ArrowUpRight color="#f7f4e8" size={18} />
                  </Link>
                </div>
              </div>
              <p className="font-mourich text-3xl font-bold text-toby-frosted-pearl text-right mt-6">
                TOBY HOLDINGS
              </p>
            </div>
          </div>
          <div className="flex justify-between font-mourich text-xs text-toby-frosted-pearl font-semibold mt-12">
            <Link href="">Privacy</Link>
            <p>© 2025 — Copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}
