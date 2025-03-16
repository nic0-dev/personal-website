import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import Link from "next/link";

const footerSocials = [
  {
    href: "mailto:cagasmarknicholas@gmail.com",
    name: "Gmail",
    icon: <MailIcon className="h-4 w-4" />,
  },
  {
    href: "https://github.com/nic0-dev",
    name: "Github",
    icon: <GitHubLogoIcon className="h-4 w-4" />,
  },
  {
    href: "https://www.linkedin.com/in/marknicholascagas/",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
                target="_blank"              
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Mark Cagas
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
