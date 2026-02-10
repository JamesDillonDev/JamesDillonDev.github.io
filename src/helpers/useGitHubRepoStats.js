import { useState, useEffect } from 'react';

// Fetches GitHub repo stats and info
export function useGitHubRepoStats(owner, repo) {
  const [stats, setStats] = useState({
    stars: null,
    forks: null,
    language: '',
    lastCommit: '',
    name: '',
    description: '',
    html_url: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    async function fetchStats() {
      try {
        // Repo info
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoRes.ok) throw new Error('Repo fetch failed');
        const repoData = await repoRes.json();

        // Commits info
        const commitsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
        if (!commitsRes.ok) throw new Error('Commits fetch failed');
        const commitsData = await commitsRes.json();
        const lastCommit = commitsData[0]?.commit?.committer?.date || '';

        if (!cancelled) {
          setStats({
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            language: repoData.language,
            lastCommit,
            name: repoData.name || '',
            description: repoData.description || '',
            html_url: repoData.html_url || '',
            loading: false,
            error: null,
          });
        }
      } catch (e) {
        if (!cancelled) setStats(s => ({ ...s, loading: false, error: e.message }));
      }
    }
    fetchStats();
    return () => { cancelled = true; };
  }, [owner, repo]);
  return stats;
}
