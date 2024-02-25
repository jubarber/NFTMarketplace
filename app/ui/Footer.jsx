'use client'
import React from 'react';
import { Input, Button, Divider } from "@nextui-org/react";
import ShopIcon from "./icons/ShopIcon";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { FiYoutube, FiTwitter } from "react-icons/fi";
import Link from 'next/link'
export default function MainFooter() {
  return (
    <div className="h-[334px] bg-[#3B3B3B]">
      <div className="flex justify-around p-8 ">
        <div>
          <div className="flex flex-row gap-2">
            <ShopIcon />
            <p className="text-3xl font-semi">NFT Marketplace</p>
          </div>
          <br />
          <p className="text-lg text-default-500">NFT marketplace UI created</p>
          <p className="text-lg text-default-500">with Anima for Figma</p>
          <br />
          <p className="text-lg text-default-500 mb-2">Join our community</p>
          <div className="flex flex-row gap-3">
            <Link href="https://discord.com/invite/eQxkYTNxSp">
              <RxDiscordLogo color='#858584' size={'2em'} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
              <FiYoutube color='#858584' size={'2em'} />
            </Link>
            <Link href="https://twitter.com/animaapp?lang=en">
              <FiTwitter color='#858584' size={'2em'} />
            </Link>
            <Link href="https://www.instagram.com/animaapp/?hl=en">
              <FaInstagram color='#858584' size={'2em'} />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-3xl font-semi">Explore</p>
          <br />
          <Link href="/marketplace">
            <p className="text-lg text-default-500">Marketplace</p>
          </Link>
          <br />
          <p className="text-lg text-default-500">Rankings</p>
          <br />
          <p className="text-lg text-default-500">Connect a wallet</p>
        </div>
        <div>
          <p className="text-3xl font-semi">Join Our Weekly Digest</p>
          <br />
          <p className="text-lg text-default-500">Get exclusive promotions & updates</p>
          <p className="text-lg text-default-500">straight to your inbox.</p>
          <br />
          <div className="flex min-w-80 h-12">
            <Input size="md" radius="lg" label="Enter your email here" className="light" classNames={{ inputWrapper: "hover: gb-white" }} />
            <div className="flex justify-end">
              <Button className="absolute w-36" size="lg" radius="lg" color='secondary'>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Divider className="w-[91em] h-[2px]" />
      </div>
      <div className="ml-[12.6em]">
        <p className="text-sm text-default-500 mt-3">Ⓒ NFT Market. Use this template freely</p>
      </div>
    </div >
  )
};
