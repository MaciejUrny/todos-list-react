import { SectionComponent, Header, HeaderTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionComponent>
        <Header>
            <HeaderTitle>
                {title}
            </HeaderTitle>
            {extraHeaderContent}
        </Header>
        {body}
    </SectionComponent>
);

export default Section;