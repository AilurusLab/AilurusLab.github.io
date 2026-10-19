import React from "react";
import { Menu } from "lucide-react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./sheet";
import { Button } from "./button";
import { Wordmark } from "./wordmark";
import { cn } from "@/lib/utils";

// Union type: internal routes (to) OR external links (href)
type NavItem =
  | { label: string; to: string; end?: boolean }
  | { label: string; href: string; external?: boolean };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "Research", to: "/research" },
  { label: "People", to: "/people" },
  { label: "Dr. Davalos ↗", href: "https://edavalosanaya.github.io", external: true },
];

/**
 * A Link that knows whether its route is active. Unlike NavLink it takes a
 * plain string className, so Radix `asChild` wrappers can merge into it.
 */
function RouteLink({
  to,
  end,
  className,
  activeClassName,
  ...props
}: React.ComponentProps<typeof Link> & { to: string; end?: boolean; activeClassName: string }) {
  const { pathname } = useResolvedPath(to);
  const active = !!useMatch({ path: pathname, end: !!end });
  return (
    <Link to={to} aria-current={active ? "page" : undefined} className={cn(className, active && activeClassName)} {...props} />
  );
}

function ExternalLink({ item, className }: { item: Extract<NavItem, { href: string }>; className: string }) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {item.label}
    </a>
  );
}

const DESKTOP_LINK = "px-3 py-2 rounded-full text-sm font-semibold text-foreground/80 transition-colors hover:bg-leaf hover:text-moss";
const MOBILE_LINK = "w-full text-left px-3 py-2 rounded-full text-base font-semibold hover:bg-leaf hover:text-moss";
const ACTIVE = "bg-leaf text-moss";

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={"to" in item ? item.to : item.href}>
            <NavigationMenuLink asChild>
              {"to" in item ? (
                <RouteLink to={item.to} end={item.end} className={DESKTOP_LINK} activeClassName={ACTIVE}>
                  {item.label}
                </RouteLink>
              ) : (
                <ExternalLink item={item} className={DESKTOP_LINK} />
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-paper">
        <nav className="mt-6 grid gap-1 px-2">
          {NAV_ITEMS.map((item) => (
            // SheetClose closes the drawer when the child is clicked
            <SheetClose asChild key={"to" in item ? item.to : item.href}>
              {"to" in item ? (
                <RouteLink to={item.to} end={item.end} className={MOBILE_LINK} activeClassName={ACTIVE}>
                  {item.label}
                </RouteLink>
              ) : (
                <ExternalLink item={item} className={MOBILE_LINK} />
              )}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-bamboo/30 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 md:h-20 items-center justify-between gap-3">
          {/* Brand → send home */}
          <NavLink to="/" end className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight">
            <span className="grid size-11 place-items-center rounded-full bg-leaf md:size-12">
              <img src="/ailurus-mascot.svg" alt="" className="h-8 md:h-9" />
            </span>
            <Wordmark />
          </NavLink>

          <DesktopNav />
          <div className="md:hidden flex items-center gap-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
