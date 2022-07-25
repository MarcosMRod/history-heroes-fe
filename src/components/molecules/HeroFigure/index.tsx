import classNames from 'classnames'
import { Svg } from '../../../svg'
import { HeroesNames } from '../../../types'
import { HeroActions } from '../HeroActions'
import s from './style.module.sass'
export const HeroFigure = ({
  heroName,
  team,
  selected = false,
  onClick,
}: {
  heroName: HeroesNames
  team: 1 | 2
  selected: boolean
  onClick: () => void
}) => {
  return (
    <div className={s.heroFigure_container}>
      <HeroActions selected={selected} />
      <div
        className={classNames(
          s.frameHero,
          team === 1 ? s.team1 : s.team2,
          selected && s.selected,
        )}
        onClick={onClick}
      >
        <Svg name={heroName} />
      </div>
    </div>
  )
}