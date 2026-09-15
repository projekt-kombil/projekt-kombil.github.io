import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CreationSection from "./CreationSection";

vi.mock("../../utils/analytics", () => ({
  trackEvent: vi.fn(),
}));

const project = {
  imgLink: "/images/portfolio/display_cards/attendo_webp.webp",
  imgLinkLg: "/images/portfolio/attendo.webp",
  title: "Attendo",
  subtitle: "Design and Development",
  link: "https://attendo.services",
  technology: ["React"],
};

describe("CreationSection", () => {
  it("opens and closes a project's details from its card", () => {
    render(<CreationSection data={{ creationItems: [project] }} />);

    fireEvent.click(
      screen.getByRole("button", { name: "View details for Attendo" }),
    );

    expect(screen.getByRole("dialog")).toHaveTextContent("Attendo");

    fireEvent.click(
      screen.getByRole("button", { name: "Close project details" }),
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
