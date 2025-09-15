import React from "react";
import Layout from "@theme/Layout";

export default function Contact() {
  return (
    <Layout>
      <div class="h-full w-full flex flex-col items-center content-center justify-center">
        <div class="rounded-lg shadow-sm m-4 bg-sky-200 dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:items-center md:justify-between">
            <h1>
              For Questions regarding a build, a farming strategy or layouts
              please contact me on<span>&#160;</span>
              <a
                href="https://discord.gg/EvJhCTgpnD"
                target="_blank"
                class="hover:underline text-gray-400"
              >
                Discord
              </a>
              <span>&#160;</span>
              or ask me live during a<span>&#160;</span>
              <a
                href="https://www.twitch.tv/cyclondefinitiv"
                target="_blank"
                class="hover:underline text-gray-400"
              >
                Stream
              </a>
              <span>&#160;</span>
            </h1>
            <h1 class="">
              Business enquires can reach me at business@definitivguide.com
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
