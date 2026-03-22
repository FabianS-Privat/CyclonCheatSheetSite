import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col")}>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Notice</Heading>
              <p>
                Hello all, I apologize for the long Downtime of the Site during
                3.28 Leauge Launch, the Site got a massive Spike in Visits and
                blew the Budget I had hosting with Vercel. I had to cancel the
                plan and find a alternative Solution. It is now hosted via
                GitHub Pages, which should be free, but you might encounter
                longer load times. I apoligize again for any inconvenience
                caused.
              </p>
              <p>
                If you would like to support me, you can do so via Patreon or
                with a One-Time Donation. Even just 1 $ per month would mean a
                lot to me. <br />( I addeda a 1€ Tier, but Patreon hides it on
                the initial view, its left of the Splinter Supporter.)
              </p>
              <Heading as="h3">Patreon</Heading>
              <div class="h-[90px] w-fit bg-grey-800 m-auto flex flex-col">
                <a
                  href="https://www.patreon.com/bePatron?u=182207519"
                  target="_blank"
                >
                  <img src="/img/banner.png" alt="Patreon" />
                </a>
              </div>

              <p> Thanks to everyone supporting my content:</p>
              <h2>Emblem Supporter</h2>
              <p> Kesuke, Morfyzm, (des)mosthenes, deedai</p>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
