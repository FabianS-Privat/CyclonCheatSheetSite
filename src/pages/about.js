import React from "react";
import Layout from "@theme/Layout";

export default function About() {
  return (
    <Layout>
      <div class="h-full w-full  flex flex-col items-center content-center justify-center">
        <div class="rounded-lg shadow-sm m-4 bg-sky-200 dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl !p-4 flex flex-col md:items-center md:justify-between">
            <h1 class="text-gray-700 dark:text-gray-400">
              This page is ment to collect the various Spreadsheets and
              documents I have and bundle them in one place.
              <br />
              The advertisments on this page are ment to cover the cost of
              upkeep and maintainance.
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
