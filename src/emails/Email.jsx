import { Button, Column, Heading, Html, Row } from "@react-email/components";
import * as React from "react";

export default function Email({ name, phoneNo, email, desc, resumeContent }) {
  return (
    <Html>
      <Heading>New Talent {name}</Heading>
      <Row>
        <Column>{phoneNo}</Column>
        <Column>{email}</Column>
        <Column>{desc}</Column>
      </Row>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
