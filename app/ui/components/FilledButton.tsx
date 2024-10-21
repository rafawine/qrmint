"use client";

import { useEffect } from "react";

export default function FilledButton({
  label,
}: Readonly<{
  label: string;
}>) {
  useEffect(() => {
    import("@material/web/button/filled-button");
  }, []);

  return <md-filled-button>{label}</md-filled-button>;
}
