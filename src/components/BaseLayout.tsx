import React from "react";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-sm container min-h-screen mx-auto bg-[#F9F9FB]">
      {children}
    </div>
  );
}
