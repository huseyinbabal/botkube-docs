import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./index.module.scss";

type FeatureItem = {
  title: string;
  iconClass: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Privacy",
    iconClass: "fas fa-user-secret",
    description: (
      <>
        The back end for the Botkube app runs in your Kubernetes cluster so you have complete control of your data and
        software.
      </>
    ),
  },
  {
    title: "Execute kubectl commands",
    iconClass: "fas fa-terminal",
    description: (
      <>
        Use the familiar Kubectl syntax, just with a new interface. You do not have to learn anything new! Plus you can
        configure which Kubectl commands Botkube can execute. See <Link to="/docs/configuration">configuration</Link>{" "}
        for details.
      </>
    ),
  },
  {
    title: "Support for multiple interfaces",
    iconClass: "fas fa-tasks",
    description: (
      <>
        Like Slack, Botkube can also be integrated with Mattermost, Microsoft Teams, Discord, ElasticSearch and outgoing
        webhook. See <Link to="/docs/configuration">configuration</Link> syntax for details.
      </>
    ),
  },
  {
    title: "Supports Custom Resources",
    iconClass: "fas fa-puzzle-piece",
    description: (
      <>
        Botkube can monitor any Kubernetes resource including Custom Resources. This allows you to configure alerts on
        some interesting events like certificate issue/expiry if you are using cert-manager, or backup failure if you
        are using backup tools like Velero or Kanister.
      </>
    ),
  },
  {
    title: "Debug Anywhere, Anytime",
    iconClass: "fas fa-cogs",
    description: (
      <>
        With Botkube you can monitor and debug Kubernetes deployments from anywhere. Even if you are camping without a
        laptop, you can use Slack, Mattermost or Microsoft Teams mobile apps to get crucial information.
      </>
    ),
  },
  {
    title: "Easy to configure",
    iconClass: "fas fa-cogs",
    description: (
      <>
        Get notifications about things that you really care about. You can configure events, objects, and namespaces
        that you want to be informed about.
      </>
    ),
  },
  {
    title: "Deploy on any Kubernetes cluster",
    iconClass: "fas fa-cloud",
    description: (
      <>
        You can deploy the Botkube back end on any Kubernetes cluster, whether it is Minikube, cloud-managed Kubernetes,
        or anything in between.
      </>
    ),
  },
  {
    title: "Add custom filters",
    iconClass: "fas fa-plug",
    description: (
      <>
        It is very easy to write your own filters and registering them to FilterEngine. Follow
        <Link to="/docs/filters"> this</Link> guide to learn more.
      </>
    ),
  },
  {
    title: "Security",
    iconClass: "fas fa-shield-alt",
    description: <>By default Botkube uses a READONLY service account, you can customize this to meet your needs.</>,
  },
  {
    title: "Open source",
    iconClass: "fab fa-github",
    description: <>The Botkube back end is open source and we welcome your feedback and contributions.</>,
  },
];

function Feature({ title, iconClass, description }: FeatureItem) {
  return (
    <div className="col col--6">
      <div className={clsx("text--center", styles.feature)}>
        <h3>
          <i className={iconClass} role="img" /> {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function BotKubeFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">Features</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
