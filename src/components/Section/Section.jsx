import PropTypes from 'prop-types';
import { SectionContainer } from '../Section/Section.styled.jsx';

export const Section = ({ title, children }) => {
    return (
        <>
            <SectionContainer>
                {title}
            </SectionContainer>
            {children}
        </>
    );
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}