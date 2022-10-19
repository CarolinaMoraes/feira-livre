import React, { useState } from "react"
import PropTypes from "prop-types"

const AccordionGroup = ({ children }) => {

  const [openedIndex, setOpenedIndex] = useState(-1);

  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      open: index === openedIndex,
      onChange: () => {
        if (index === openedIndex) setOpenedIndex(-1);
        else setOpenedIndex(index);
      }
    });
  });
};

AccordionGroup.defaultProps = {
  children: undefined
};

AccordionGroup.propTypes = {
  children: PropTypes.node
};

export default AccordionGroup;
