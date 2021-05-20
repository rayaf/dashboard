import React from 'react';

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from "./styles";

const List: React.FC = () => {
  const options = [
    {value: 'ray', label: 'ray'},
    {value: 'tamires', label: 'tamires'},
    {value: 'xuxa', label: 'xuxa'}
  ]
	return (
		<Container>
      <ContentHeader title="Saída" lineColor="#E44C4E">
        <SelectInput options={options}/>
      </ContentHeader>
      
      <HistoryFinanceCard
        cardColor={"#313862"}
        tagColor={"#E44C4E"}
        title={"Conta de luz"}
        subtitle={"27/07/2020"}
        amount={"R$ 350,00"}
      />
      <HistoryFinanceCard
        cardColor={"#313862"}
        tagColor={"#E44C4E"}
        title={"Conta de luz"}
        subtitle={"27/07/2020"}
        amount={"R$ 350,00"}
      />
      <HistoryFinanceCard
        cardColor={"#313862"}
        tagColor={"#E44C4E"}
        title={"Conta de luz"}
        subtitle={"27/07/2020"}
        amount={"R$ 350,00"}
      />

    </Container>
	);
}

export default List;