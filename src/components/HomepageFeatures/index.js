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
                Full Transparency, this Site got way more visits than expected
                and as a result is more expensive too. <br />I would highly
                appreciate it, if you could disable your Ad-Blocker. That way I
                could cover part of the Cost for this Website with Ad-Revenue.
              </p>
              <p>
                Alternativly, if you would like to support me directly, you can
                do so via Patreon or with a One-Time Donation. As little as 1 $
                per month would help me a lot to cover the Cost. <br />( I
                addeda a 1€ Tier, but Patreon hides it on the initial view, its
                left of the Splinter Supporter.)
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
              <h1>Monolith Supporter</h1>
              <p> TempestMind</p>
              <h2>Emblem Supporter</h2>
              <p> Kesuke, (des)mosthenes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
