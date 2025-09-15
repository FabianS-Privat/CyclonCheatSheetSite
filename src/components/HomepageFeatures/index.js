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
              <Heading as="h3">Patreon</Heading>
              <div class="h-[90px] w-fit bg-grey-800 m-auto flex flex-col">
                <a
                  href="https://www.patreon.com/bePatron?u=182207519"
                  target="_blank"
                >
                  <img src="/img/Banner.png" alt="Patreon" />
                </a>
              </div>

              <p> Thanks to everyone supporting my content:</p>
              <p> Kesuke, (des)mosthenes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
