// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if(lowerCaseMessage.includes("hello")){
            this.actionProvider.greet();
        }

        if(lowerCaseMessage.includes("portfolio")){
            this.actionProvider.handlePortfolioList();
        }

        if(lowerCaseMessage.includes("social media")){
            this.actionProvider.handleSocialMediaList();
        }
    }
}

export default MessageParser;