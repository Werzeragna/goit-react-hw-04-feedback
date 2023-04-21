import PropTypes from 'prop-types';
import { StyledSection, StyledSectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <StyledSectionTitle>{title}</StyledSectionTitle>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}
