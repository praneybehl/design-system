import config from './config'
import GitHubApi from 'github'

const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: config.githubToken
})
const res = github.repos.getAll({})

console.log('repos', res)
