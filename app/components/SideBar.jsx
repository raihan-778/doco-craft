import _ from "lodash";
import Link from "next/link";

export const SideBar = ({ docs }) => {
  const roots = docs?.filter((doc) => !doc.parent);
  console.log("roots", roots);

  const nonRoots = _.groupBy(
    docs?.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  console.log("nonRoote", nonRoots);
  return (
    <div>
      <nav class="hidden lg:mt-10 lg:block">
        <ul role="list" class="border-l border-transparent">
          {roots?.map((rootNode) => (
            <li key={rootNode.id} class="relative">
              <Link
                aria-current="page"
                class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                href={`/docs/${rootNode.id}`}
              >
                <span class="truncate">{rootNode.title}</span>
              </Link>

              {nonRoots[rootNode.id] && (
                <ul role="list" class="border-l border-transparent">
                  {nonRoots[rootNode.id]?.map((subRoot) => (
                    <li key={subRoot.id} class="relative">
                      <Link
                        aria-current="page"
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                        href={`/docs/${subRoot.id}`}
                      >
                        <span class="truncate">{subRoot.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
