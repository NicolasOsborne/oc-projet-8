import PropTypes from 'prop-types'

const Tag = ({ tag }) => {
  return (
    <div className='tag-container'>
      <span className='tag-content'>{tag}</span>
    </div>
  )
}

// Définition des PropTypes du props tag
Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
