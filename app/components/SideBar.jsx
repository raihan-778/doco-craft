import _ from "lodash";
import Link from "next/link";

const SideBar = ({ docs }) => {
  const roots = docs?.filter((doc) => !doc.parent);
  console.log("roots", roots);

  const nonRoots = _.groupBy(
    docs?.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  console.log("nonRoote", nonRoots);
  return (
    <nav className="lg:mt-10 lg:block my-10">
      <div className="relative mt-3 pl-2">
        {/* Decorative layers – made click-safe */}
        <div className="absolute inset-x-0 top-0 pointer-events-none bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
        <div className="absolute inset-y-0 left-2 pointer-events-none w-px bg-zinc-900/10 dark:bg-white/5"></div>
        <div className="absolute left-2 pointer-events-none h-6 w-px bg-emerald-500"></div>

        <ul role="list" className="border-l border-transparent">
          {roots?.map((rootNode) => (
            <li key={rootNode.id} className="relative">
              <Link
                href={`/docs/${rootNode.id}`}
                aria-current="page"
                className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              >
                <span className="truncate">{rootNode.title}</span>
              </Link>

              {nonRoots[rootNode.id] && (
                <ul role="list" className="border-l border-transparent">
                  {nonRoots[rootNode.id].map((subRoot) => (
                    <li key={subRoot.id} className="relative">
                      <Link
                        href={`/docs/${rootNode.id}/${subRoot.id}`}
                        aria-current="page"
                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        <span className="truncate">{subRoot.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default SideBar;
