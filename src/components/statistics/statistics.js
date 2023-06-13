import PropTypes from "prop-types";
import css from './statistics.css'
console.log(css);

export const Statistics = ({title, stats}) => {
    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(Statistics =>
            <li className="item" key={Statistics.id}>
            <span className="label">{Statistics.label}: </span>
            <span className="percentage">{Statistics.percentage}%</span>
          </li>
            )}
        </ul>
      </section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
  ).isRequired
};