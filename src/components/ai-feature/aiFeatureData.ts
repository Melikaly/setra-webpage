
import {
  Activity,
  ChartColumn,
  Search,
  TrendingUp,
  TriangleAlert,
  Zap,
} from "lucide-react";
import type { AiFeatureProps } from "./AiFeatureProps";


export const aiFeatureHeading = "Intelligent Video Analytics Powered by AI";
export const aiFeatureText =
  "Leverage cutting-edge artificial intelligence to transform your surveillance system into a proactive security solution.";

export const features: AiFeatureProps[] = [
  {
    color: "blue",
    icon: Search,
    title: "Object Detection & Recognition",
    text:
      "Advanced AI algorithms identify and classify objects, people, vehicles, and suspicious items in real-time with 99.9% accuracy.",
    checkedTexts: [
      "Person & Vehicle Detection",
      "Facial Recognition",
      "License Plate Reading",
    ],
  },
  {
    color: "purple",
    icon: TriangleAlert,
    title: "Behavioral Analysis",
    text:
      "Detect unusual behaviors, loitering, crowd formation, and potential security threats through advanced pattern recognition.",
    checkedTexts: [
      "Intrusion Detection",
      "Crowd Monitoring",
      "Abandoned Object Alert",
    ],
  },
  {
    color: "green",
    icon: ChartColumn,
    title: "Predictive Analytics",
    text:
      "Machine learning algorithms analyze patterns to predict potential security incidents before they occur.",
    checkedTexts: ["Risk Assessment", "Trend Analysis", "Incident Prediction"],
  },
  {
    color: "orange",
    icon: Zap,
    title: "Real-time Alerts",
    text:
      "Instant notifications and automated responses when AI detects security threats or unusual activities.",
    checkedTexts: [
      "Instant Notifications",
      "Multi-channel Alerts",
      "Automated Response",
    ],
  },
  {
    color: "cyan",
    icon: Activity,
    title: "Smart Search",
    text:
      "AI-powered video search allows you to find specific events, objects, or people across hours of footage in seconds.",
    checkedTexts: [
      "Semantic Search",
      "Timeline Navigation",
      "Event Correlation",
    ],
  },
  {
    color: "pink",
    icon: TrendingUp,
    title: "Performance Optimization",
    text:
      "Continuous learning algorithms improve detection accuracy and reduce false positives over time.",
    checkedTexts: [
      "Self-Learning AI",
      "Adaptive Algorithms",
      "Performance Metrics",
    ],
  },
];
