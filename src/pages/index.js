import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage/HomePage'))
const LeaderBoard = lazy(() => import('./LeaderBoard/LeaderBoard'))

export {
    HomePage,
    LeaderBoard
}