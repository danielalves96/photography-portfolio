import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { supabase } from "../../supabase";
import { Spacer } from "../Gallery/styles";
import { Container, Content, Main } from "./styles";

export function Profile() {
    const [biography, setBiography] = useState(``);

    async function getBiography() {
        const { data, error } = await supabase.from(`biography`).select();

        if (data) {
            console.log(data);
            setBiography(data[0].biography);
        }

        if (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBiography();
    }, []);

    return (
        <Main>
            <Container>
                <Header />
                <Spacer />
                <Sidebar />
                <div className="animate__delay-1s animate__animated animate__fadeIn animate__slow">
                    <Content>
                        <h1>SOBRE MIM</h1>
                        <br />
                        <span>{biography}</span>
                    </Content>
                </div>
            </Container>
        </Main>
    );
}
