import PropTypes from 'prop-types'

const Tag = ({ tag }) => {
  return (
    <div className='tag-container'>
      <span className='tag-content'>{tag}</span>
    </div>
  )
}

Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
