import withFetchLoader from './containers/FetchLoader'
import SceaHomePageLatestExperimentContainer from './containers/SceaHomePageLatestExperimentContainer'

const _SceaHomePageLatestExperimentContainer = withFetchLoader(SceaHomePageLatestExperimentContainer)

export {_SceaHomePageLatestExperimentContainer as SceaHomePageLatestExperimentContainer}