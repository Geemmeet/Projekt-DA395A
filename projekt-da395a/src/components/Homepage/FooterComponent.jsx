
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Recipeinspiration™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
