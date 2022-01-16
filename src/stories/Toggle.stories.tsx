import React from "react";
import { Story } from "@storybook/react";
import Heading from "../components/Heading";
import Paragraf from "../components/Paragraf";
import Space from "../components/Space";
import Toggle from "../components/Toggle";
import { IToggle } from "../components/Toggle/Toggle";

export default {
  title: "Toggle",
  component: Toggle,
};

const Template: Story<IToggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "toggle",
  header: {
    title: <Heading type="h5">Заголовок</Heading>,
    isButton: true,
  },
  children: (
    <>
      <Paragraf>
        Свобода творит принцип восприятия, отрицая очевидное. Реальная власть
        дискредитирует закон исключённого третьего. Созерцание поразительно.
        Отвечая на вопрос о взаимоотношении идеального ли и материального ци,
        Дай Чжень заявлял, что отношение к современности решительно создает
        напряженный бабувизм. Импликация реально оспособляет язык образов.
      </Paragraf>
      <Space size="thin" view="compressed" color="blue" />
      <Paragraf>
        Заблуждение подрывает онтологический структурализм. Мир контролирует
        здравый смысл. Отвечая на вопрос о взаимоотношении идеального ли и
        материального ци, Дай Чжень заявлял, что освобождение амбивалентно
        оспособляет гедонизм. Априори, ассоциация контролирует гений. Моцзы,
        Сюнъцзы и другие считали, что суждение решительно подрывает закон
        исключённого третьего, tertium nоn datur.
      </Paragraf>
      <Space size="thin" view="compressed" color="blue" />
      <Paragraf>
        Вероятностная логика творит конфликт. Идеи гедонизма занимают
        центральное место в утилитаризме Милля и Бентама, однако дедуктивный
        метод раскладывает на элементы примитивный гений. Созерцание
        раскладывает на элементы здравый смысл. Согласно мнению известных
        философов, отношение к современности понимает под собой дедуктивный
        метод. Ощущение мира преобразует сложный мир.
      </Paragraf>
    </>
  ),
};
