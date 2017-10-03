import config from './config'
import GitHubApi from 'github'

import * as repos from './repos'

const github = new GitHubApi({
  // debug: true
})
github.authenticate({
  type: 'oauth',
  token: config.githubToken
})
;(async _ => {
  const all = await repos.getAllOrg({ org: 'ps-dev', per_page: 100 }, github)
  all.map(repo => console.log(repo.full_name))
})()
