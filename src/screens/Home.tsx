import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";

interface IMessages {
  user: string;
  message: string | undefined;
}

const Home = () => {
  const [question, setQuestion] = useState<string | undefined>();
  const [prompt, setPrompt] = useState<IMessages[] | undefined>();
  const scrollViewRef = useRef<ScrollView | null>(null);

  const handleQuestion = () => {
    const newQuestion: IMessages = {
      user: "user",
      message: question,
    };
    getOpenAiResponse(question);
    setPrompt((prev) => [...(prev || []), newQuestion]);
    console.log(prompt);
  };

  const getOpenAiResponse = async (apiprompt: string | undefined) => {
    try {
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const body2 = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: apiprompt,
          },
        ],
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body2),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      // console.log(responseData)
      let answer = responseData.choices[0].message.content;
      //   console.log(responseData.choices[0].message.content);
      const solution: IMessages = {
        user: "bot",
        message: answer,
      };
      setPrompt((prev) => [...(prev || []), solution]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginBottom: 70 }}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      >
        <FlatList
          horizontal={false}
          numColumns={1}
          data={prompt}
          renderItem={({ item }) => {
            return item.user == "user" ? (
              <Text style={styles.user}>{item.message}</Text>
            ) : (
              <Text style={styles.bot}>{item.message}</Text>
            );
          }}
        />
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Ask Something..."
          onChangeText={(text) => setQuestion(text)}
        />
        <TouchableOpacity onPress={handleQuestion}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../images/send.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,

    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor:"blue"
  },

  input: {
    width: "90%",
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,

    backgroundColor: "#E4E6EA",
    borderWidth: 2,
    borderColor: "black",
    marginRight: 4,
  },

  bot: {
    backgroundColor: "#5851DB",
    width: "80%",
    // left: 0,
    color: "white",
    padding: 10,
    marginTop: 4,
    borderRadius: 10,
    fontSize: 15,
  },
  user: {
    backgroundColor: "#454545",
    color: "white",
    // position:'absolute',
    // alignItems:'flex-end',

    height: "auto",
    left: 0,
    padding: 10,
    marginTop: 4,
    borderRadius: 10,
    marginLeft: "auto",
  },
});
