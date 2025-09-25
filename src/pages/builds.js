import React from "react";
import Layout from "@theme/Layout";

export default function About() {
  return (
    <Layout>
      <div class="h-full w-full">
        {/* <div id="ad-container" class="my-4 flex justify-center">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4659198126450802"
            crossorigin="anonymous"
          ></script>
          <ins
            class="adsbygoogle"
            data-ad-client="ca-pub-4659198126450802"
            data-ad-slot="2573850842"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div> */}
        <iframe
          class="h-full w-full"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPWKhEapD7L4r7WYacTwz-xKK36ZKS9VncxJ7yg0ZemuwF2uJN-RjR-3pLe6j6kJGgdmzhRItp47uF/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </div>
    </Layout>
  );
}
