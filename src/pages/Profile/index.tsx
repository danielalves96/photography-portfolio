import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Spacer } from "../Gallery/styles";
import { Container, Content, Main } from "./styles";

export function Profile() {
    const biography = `Pós-graduado em fotografia (Lato Sensu), formado em Processos Fotográficos, além de cursos de extensão de arte, técnica, fotografia básica e avançada, Photoshop avançado e fotografia de retratos, exerço a profissão desde 2013. Anteriormente formado em Técnico em Mecânica Industrial e Tecnologia em Mecatrônica Industrial, com 3 anos de atuação na área, surgiu-me a paixão pela arte e pela fotografia, assim como a vontade de me aprofundar o máximo possível nela para transforma-la em profissão.
    Entre ensaios, casamentos, gastronomia, arquitetura, festas e mais de 300 espetáculos teatrais fotografados, me tornei empreendedor, atuo como fotógrafo, editor avançado de imagens e vídeos, aplicando no meu trabalho a arte em sua forma mais orgânica e intensa. Sigo na busca pelo aprimoramento da minha sensibilidade artística e minha técnica, tendo como objetivo o reconhecimento através de minhas obras e tornar-me professor para formar mais artistas que valorizem verdadeiramente a fotografia.`;
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
