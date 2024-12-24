// app/components/emails/WelcomeEmail.tsx
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
  } from '@react-email/components';
  import * as React from 'react';
  
  const WelcomeEmail = () => {
    const previewText = "Welcome to Aurbyn's Inner Circle of Innovation 🌟";
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-[#f6f9fc] my-auto mx-auto font-sans">
            <Container className="bg-white my-10 mx-auto p-8 w-[600px] rounded-lg shadow-lg">
              {/* Header */}
              <Section className="mt-4">
                <Heading className="text-3xl font-bold text-center p-0 my-8 mx-0 text-[#2E294E]">
                  Welcome to the Inner Circle of Innovation 🌟
                </Heading>
                <Heading className="text-xl font-semibold text-center p-0 mb-8 mx-0 text-[#1B998B]">
                  Unlock Exclusive Insights and Opportunities (and Some Laughs)
                </Heading>
              </Section>
  
              {/* Greeting */}
              <Text className="text-lg text-gray-800 mb-6">
                Hi there,
              </Text>
  
              <Text className="text-gray-800 mb-6">
                Welcome to Aurbyn's newsletter! You've officially leveled up to the VIP section of venture capital—and we promise it's worth the hype. Here's a sneak peek of what's coming your way:
              </Text>
  
              {/* Benefits Section */}
              <Section className="bg-[#f8fafc] p-6 rounded-lg mb-6">
                <Text className="text-gray-800 font-semibold mb-4">
                  🎯 Market Trends That Matter
                </Text>
                <Text className="text-gray-600 ml-6 mb-4">
                  Because spotting the next big thing before it's cool is basically a superpower. (We're like the hipsters of finance, but with better coffee.)
                </Text>
  
                <Text className="text-gray-800 font-semibold mb-4">
                  🚀 Behind-the-Scenes Startup Stories
                </Text>
                <Text className="text-gray-600 ml-6 mb-4">
                  Learn how founders go from "I have an idea" to "I'm the CEO, and yes, we do have a ping-pong table." Spoiler: It's not as glamorous as it sounds.
                </Text>
  
                <Text className="text-gray-800 font-semibold mb-4">
                  💡 Actionable Investment Tips
                </Text>
                <Text className="text-gray-600 ml-6 mb-4">
                  Insights that make you go, "Oh, so that's why they're rich." (Hint: It's not just avocado toast avoidance.)
                </Text>
  
                <Text className="text-gray-800 font-semibold mb-4">
                  🎟️ Exclusive Opportunities
                </Text>
                <Text className="text-gray-600 ml-6">
                  Be the first to hear about events, partnerships, and deals—because nobody likes being late to the party.
                </Text>
              </Section>
  
              <Text className="text-gray-800 mb-6">
                Think of this as your all-access pass to the brainiest, wittiest corner of the VC world. (Okay, maybe we're biased.) But seriously, you're not just a subscriber—you're part of a network that's shaping the future.
              </Text>
  
              {/* Joke Section */}
              <Section className="bg-[#2E294E] text-white p-6 rounded-lg mb-6">
                <Text className="font-semibold mb-2">🎭 Finance Joke Break:</Text>
                <Text className="italic">
                  Why did the startup founder bring a ladder to the pitch meeting? Because they wanted to reach new heights in valuation. 😉
                </Text>
              </Section>
  
              {/* Closing */}
              <Text className="text-gray-800 mb-6">
                Welcome aboard, and let's make some magic happen (or at least a great ROI),
              </Text>
  
              <Text className="text-gray-800 font-semibold mb-2">
                Thank you,<br />
                The Aurbyn Team
              </Text>
  
              <Link 
                href="https://aurbyn.com"
                className="text-[#1B998B] block mb-8"
              >
                Visit aurbyn.com
              </Link>
  
              {/* Footer */}
              <Section className="border-t border-gray-200 pt-6 text-sm text-gray-600">
                <Text className="mb-4">
                  If you would no longer like to receive email notifications or would like to make other changes, you can{' '}
                  <Link href="https://aurbyn.com/preferences" className="text-[#1B998B]">
                    manage your preferences here
                  </Link>.
                </Text>
  
                <Text className="text-xs text-gray-500">
                  _______________________________________________________________  
                  Aurbyn, Inc. is a subsidiary of Aurbyn, Inc. Aurbyn.com is a registered trademark of Aurbyn, Inc. 
                  This message was produced and distributed by Aurbyn, Inc. or its affiliates © {new Date().getFullYear()} Aurbyn, Inc. 
                  or its affiliates. All rights reserved.
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default WelcomeEmail;