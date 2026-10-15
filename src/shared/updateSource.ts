/** Where new versions come from: a GitHub repository, set in the settings as a link (Einstellungen → Info → Updates). */
export const DEFAULT_UPDATE_REPO = 'https://github.com/tu-cockpit-community/tuwas'

export interface GithubRepo {
  owner: string
  repo: string
}

/**
 * Owner and repository from a link as people paste it: "https://github.com/owner/repo", with or without "www.",
 * ".git", a trailing slash or a deeper path ("…/releases"), or just "owner/repo". null for anything else, including
 * links to other sites.
 */
export function githubRepo(link: string): GithubRepo | null {
  const text = link.trim().replace(/^https?:\/\//i, '')
  const parts = text.split('/').filter(Boolean)
  // "github.com/owner/repo" or "owner/repo"; a first part with a dot is a host, and only GitHub counts
  if (parts[0]?.includes('.')) {
    if (!/^(www\.)?github\.com$/i.test(parts[0])) return null
    parts.shift()
  }
  const owner = parts[0]
  const repo = parts[1]?.replace(/\.git$/i, '')
  if (!owner || !repo || !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})$/.test(owner) || !/^[A-Za-z0-9._-]{1,100}$/.test(repo) || /^\.+$/.test(repo)) return null
  return { owner, repo }
}

/** The canonical link stored in the settings. */
export const repoLink = ({ owner, repo }: GithubRepo): string => `https://github.com/${owner}/${repo}`
