import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn("space-y-4 py-4 pb-12 h-screen bg-slate-900", className)}
    >
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          kanguwu
          {
            // TODO: do we need a text thing here
          }
        </h2>
        <div className="space-y-1">
          <NavLink to="/">
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Workspace
              </Button>
            )}
          </NavLink>
          <NavLink to="/history">
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Project History
              </Button>
            )}
          </NavLink>
          <NavLink to="/settings">
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Client Settings
              </Button>
            )}
          </NavLink>
          <NavLink to="/account">
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Account
              </Button>
            )}
          </NavLink>
          <NavLink to="/about">
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                About
              </Button>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
