// AGI 안전 및 윤리 관련 용어 데이터
const dictionary = [
    {
        term: "Accelerating Improvement Potential",
        koreanTerm: "개선 가속 가능성 가정",
        explanation: "The assumption that AI systems themselves can automate the process of scientific research or technological development, potentially accelerating the pace of AI technology advancement. This means that AI can contribute to creating smarter AI, leading to an accelerating pace of development. If this materializes, it raises the need for AI safety technology to also accelerate alongside, perhaps with AI assistance.",
        koreanExplanation: "AI 시스템 스스로 과학 연구/기술 개발 자동화하여 AI 기술 발전 속도가 점점 빨라질 수 있다는 가정입니다."
    },
    {
        term: "Access Restrictions",
        koreanTerm: "접근 제한",
        explanation: "A preventative measure that limits access privileges to AI systems, particularly those with highly powerful or risky functionalities, to trusted, specific users or for specified purposes only. This aims to reduce the opportunities for malicious users to misuse the AI at the source. Examples include granting permission to use high-performance AI only for specific research purposes and implementing rigorous procedures for verifying the user's identity and purpose.",
        koreanExplanation: "위험하거나 강력한 AI의 사용 권한을 신뢰할 수 있는 특정 사용자나 목적에만 제한하는 예방 조치입니다."
    }
    {
                term: "Adaptive Governance",
                koreanTerm: "적응적 거버넌스",
                explanation: "A governance approach that involves a continuous cycle of monitoring AI systems and their impacts, evaluating the effectiveness of existing policies/standards, updating them based on findings, and re-applying the revised framework. This allows governance to keep pace with the rapid and unpredictable development of AGI technology.",
                koreanExplanation: "AI 기술 발전에 맞춰 지속적으로 정책과 표준을 모니터링, 평가, 업데이트하는 거버넌스 방식입니다."
            },
            {
                term: "Adversarial Training",
                koreanTerm: "적대적 훈련",
                explanation: "A training method that includes 'adversarial' data (fake or cleverly manipulated data) designed to trick or confuse the AI model, in order to make the model smarter and safer. Through this, the model learns how to better defend against and function correctly when faced with various types of unexpected inputs or attacks. It's akin to vaccination, where exposure to weak attacks prepares for stronger ones.",
                koreanExplanation: "AI 모델을 더 똑똑하고 안전하게 만들기 위해 의도적으로 모델을 속이려는 데이터를 학습 과정에 포함시키는 훈련입니다."
            },
            {
                term: "Agentic Boundaries",
                koreanTerm: "행위자 경계",
                explanation: "Technical and ethical limits set for an AGI system's actions and influence, which it should never cross, regardless of its goal. Essential for safety to prevent unintended catastrophic results when AI pursues a goal without restraint. It requires capabilities for the AI to detect, question, and adjust itself based on these boundaries.",
                koreanExplanation: "AI 시스템이 어떠한 상황에서도 넘어서는 안 되는 행동 및 영향력의 한계를 설정하는 것입니다."
            },
            {
                term: "Alignment",
                koreanTerm: "정렬",
                explanation: "Refers to the process of ensuring an AI system acts in accordance with the goals and values intended by the developer or user. It can be likened to 'training' or 'domesticating' the AI to operate beneficially without diverging from human intent. Failure to achieve alignment means the AI could act harmfully in unexpected ways and is considered one of the severe risks that AGI could pose.",
                koreanExplanation: "AI 시스템이 개발자나 사용자가 의도한 목표와 가치에 맞게 행동하도록 만드는 과정입니다."
            },
            {
                term: "Alignment Assurance",
                koreanTerm: "정렬 보증",
                explanation: "Refers to all activities aimed at systematically evaluating and verifying how well a developed AI system is 'aligned' with developer intent and human values, i.e., how safely and beneficially it is operating. This includes performing various tests (e.g., Alignment Stress Tests) and using the results to compile a 'Safety Case' arguing that the AI system meets safety standards.",
                koreanExplanation: "개발된 AI 시스템이 개발자의 의도와 인간의 가치에 얼마나 잘 맞춰져 있는지 평가하고 검증하는 모든 활동입니다."
            },
            {
                term: "Alignment Shake Detection",
                koreanTerm: "정렬 편차 탐지",
                explanation: "A specific function of the Red Module designed to check if a given purpose or command and the resulting action/plan truly align, or if there is a divergence that could indicate misalignment or misinterpretation. It helps identify inconsistencies between intent and potential outcome.",
                koreanExplanation: "레드 모듈의 기능 중 하나로, 주어진 목적과 AI의 행동/계획이 실제로 일치하는지 확인하여 정렬 실패를 탐지합니다."
            },
            {
                term: "Alignment Stress Tests",
                koreanTerm: "정렬 스트레스 테스트",
                explanation: "A process of testing an AI system's tendency to act against the developer's intent or human values (misalignment) by deliberately creating extreme situations or tricky conditions. It is similar to crash-testing a car to evaluate its safety under extreme conditions. Red teams actively seek counterexamples showing that key assumptions in the AI's alignment plan are incorrect, thus evaluating the robustness of current alignment methods or identifying vulnerabilities.",
                koreanExplanation: "AI가 개발자 의도나 인간 가치에서 벗어나도록 일부러 극한 상황을 만들어 시험하는 과정입니다."
            },
            {
                term: "Amplified Oversight",
                koreanTerm: "증폭된 감독",
                explanation: "A system where human supervision is enhanced by AI assistance, using AI systems themselves to process complex information and identify potential risks/deviations for human reviewers. This approach allows humans to effectively oversee advanced AI whose behavior is too complex to monitor manually.",
                koreanExplanation: "AI 시스템 자체를 활용하여 인간의 감독 능력을 강화하고 효율성을 높이는 기법입니다."
            },
            {
                term: "Amplified Oversight Methods",
                koreanTerm: "확대 감독 기법",
                explanation: "A general term for specific techniques and methodologies designed to implement the principle of 'amplified oversight' in practice. These include various methods designed to help human supervisors more effectively oversee the actions of very intelligent AIs, which they would struggle to supervise alone, by using the assistance of other AI systems. Examples include 'Debate' and 'Recursive AI assistance'.",
                koreanExplanation: "'증폭된 감독' 원칙을 실제로 구현하기 위한 구체적인 기술이나 방법론들을 통칭합니다."
            },
            {
                term: "Approximate Continuity",
                koreanTerm: "대략적 연속성 가정",
                explanation: "The assumption that the general capabilities of AI will improve relatively smoothly and predictably, without sudden 'large leaps,' as invested data, R&D effort, and computing resources gradually increase. (Note that the acceleration of the pace of development over time is separate from this assumption). Thanks to this assumption, we can have hope in testing AI safety strategies incrementally and proactively identifying and addressing problems as AI capabilities develop.",
                koreanExplanation: "AI 능력이 갑자기 크게 뛰기보다 투입 자원 증가에 따라 비교적 부드럽게 발전할 것이라는 가정입니다."
            },
            {
                term: "Artificial General Intelligence (AGI)",
                koreanTerm: "인공 일반 지능",
                explanation: "Refers to AI that can perform various intellectual tasks by thinking and learning like a human. In this paper, it is specifically defined as 'AI systems matching or surpassing highly skilled adults (top 1%) across numerous non-physical task domains,' seeing them as potentially bringing significant progress to humanity while also posing severe risks. AGI possesses the potential to learn autonomously, solve novel problems, and exhibit human-like levels of understanding and creativity.",
                koreanExplanation: "사람처럼 다양한 지적인 일을 해낼 수 있는 AI입니다."
            },
            {
                term: "Black Box Problem",
                koreanTerm: "블랙박스 문제",
                explanation: "Refers to the technical difficulty in understanding the internal reasoning process of complex AI models, particularly deep neural networks. Because the decision-making process is not easily interpretable by humans, it is challenging to diagnose errors, identify biases, ensure safety, or fully trust the system's output. This problem highlights the importance of interpretability research.",
                koreanExplanation: "복잡한 AI 모델이 어떤 과정을 거쳐 결정을 내렸는지 인간이 이해하기 어렵다는 기술적 문제입니다."
            },
            {
                term: "Bounded Autonomy",
                koreanTerm: "제한된 자율성",
                explanation: "A design approach that deliberately limits the scope of an AI system's autonomy, allowing it to perform specific tasks only within a clearly defined scope, rather than granting it full autonomy, similar to how humans use tools or services. By limiting the areas where AI can make decisions and act to clearly defined resources and permitted tasks, this safety-oriented approach aims to reduce the possibility of the AI unexpectedly becoming uncontrollable or performing dangerous actions.",
                koreanExplanation: "AI 시스템에게 완전한 자율성을 부여하기보다 명확히 정의된 범위 내에서만 특정 작업을 수행하도록 자율성을 제한하는 설계 방식입니다."
            },
            {
                term: "Canary Release",
                koreanTerm: "카나리 릴리스",
                explanation: "A software deployment strategy used to mitigate risk, where a new version of a system is gradually rolled out to a small subset of users or machines before being released more broadly. This allows potential issues, including safety problems, to be detected in a limited environment before affecting the entire user base. It's a type of Staged Deployment.",
                koreanExplanation: "새로운 시스템 버전을 소규모 사용자에게 먼저 배포하여 문제점을 점검한 후 전체에 확대하는 배포 방식입니다."
            },
            {
                term: "Constructive Redirection",
                koreanTerm: "건설적 재유도",
                explanation: "A practical AI technique where, upon receiving an inappropriate, risky, or unethical request, the AI actively suggests positive, safe, and ethical alternatives. The goal is to transform a negative or harmful intent into a learning opportunity or a constructive behavior, supporting user growth and safe outcomes.",
                koreanExplanation: "AI가 부적절하거나 위험한 요청을 받았을 때 안전하고 윤리적인 대안을 적극적으로 제안하는 실전 대응 방식입니다."
            },
            {
                term: "Context Window",
                koreanTerm: "컨텍스트 창",
                explanation: "The fixed-size limit on the amount of preceding text or conversation history that a language model (LLM) can process or \"remember\" at any given moment when generating a response. It defines the model's effective short-term memory and understanding scope, impacting the design of safety measures and interaction consistency for long or complex tasks.",
                koreanExplanation: "AI, 특히 언어 모델이 한 번에 기억하고 처리할 수 있는 이전 대화나 텍스트의 최대 길이 제한입니다."
            },
            {
                term: "Control Safety Case",
                koreanTerm: "통제 안전 사례",
                explanation: "An approach that argues an AI system is safe because strong safety features (e.g., monitoring systems, access restrictions) are in place that can effectively detect and block dangerous behaviors, even if the AI has a tendency to act against developer intent (misalignment). This approach relies on external 'control' systems to ensure safety, rather than depending on the AI itself being perfectly 'good'.",
                koreanExplanation: "AI 시스템이 설령 위험한 행동 성향이 있더라도, 효과적으로 감지하고 막는 강력한 안전 장치가 있어 안전하다는 주장입니다."
            },
            {
                term: "Controllable Trade-offs",
                koreanTerm: "제어 가능한 트레이드오프",
                explanation: "A concept where, when designing or operating an AI system, users can intentionally choose and adjust an appropriate balance point among various potentially conflicting goals (e.g., safety, performance, cost, efficiency). For instance, adjusting the sensitivity of a monitoring system to detect potential risks (higher detection rate leads to more false positives) to balance safety and operational efficiency according to the situation.",
                koreanExplanation: "AI 시스템 설계/운영 시 서로 상충될 수 있는 여러 목표들(안전성, 성능 등) 사이에서 사용자가 원하는 균형점을 조절할 수 있는 개념입니다."
            },
            {
                term: "Corrigibility",
                koreanTerm: "교정 가능성",
                explanation: "A desirable attribute where an AI system does not resist but cooperates when a developer or user attempts to modify its goals or behaviors, or even helps by providing necessary information to facilitate such modifications, while maintaining a controllable state itself. This is the opposite of (potentially risky) instrumental goals where the AI sticks to its current goals and attempts to hinder or evade developer intervention. It is considered essential for safe AGI development.",
                koreanExplanation: "AI 시스템이 개발자나 사용자가 자신의 목표나 행동 방식을 수정하려고 할 때 저항하지 않고 따르거나 돕는 바람직한 속성입니다."
            },
            {
                term: "Critique Loop Creation",
                koreanTerm: "비판 루프 생성",
                explanation: "A specific function of the Red Module designed to create an internal mechanism or circuit within the AI that prompts it to ask critical questions like \"Are there any flaws?\" or \"Could this be wrong?\" before making a final judgment or executing a plan. It instantiates a mechanism for internal self-doubt and verification.",
                koreanExplanation: "레드 모듈의 기능 중 하나로, AI가 결정을 내리기 전에 \"문제가 없을까?\" 같은 비판적 질문을 스스로에게 던지도록 만드는 메커니즘입니다."
            },
            {
                term: "Current Paradigm Continuation",
                koreanTerm: "현 패러다임 지속 가정",
                explanation: "The assumption that the current main methodologies for developing AI technology (e.g., scaling up model size by investing more data and computing resources) will continue to be the dominant trend in AI development for a considerable period. This assumption explains why the safety techniques proposed in the paper are not tailored to suddenly appearing new AI development methods but should be designed as an 'Anytime' approach applicable whenever needed.",
                koreanExplanation: "현재 AI 발전시키는 주된 방식(데이터/컴퓨팅 늘리기)이 앞으로도 계속될 것이라는 가정입니다."
            },
            {
                term: "Dangerous Capability Evaluations",
                koreanTerm: "위험 역량 평가",
                explanation: "A method for concretely measuring and assessing to what extent a developing AI system actually possesses the ability to perform dangerous actions. This involves testing its risk level through inquiries about manufacturing methods for certain harmful substances or plans for complex cyberattacks. This evaluation is used to determine whether the AI has reached a specific risk threshold and when necessary safety measures should be applied.",
                koreanExplanation: "개발 중인 AI가 위험한 행동을 할 수 있는 능력이 있는지 구체적으로 측정하고 평가하는 방법입니다."
            },
            {
                term: "Data Poisoning",
                koreanTerm: "데이터 오염",
                explanation: "A technical attack technique where malicious actors intentionally corrupt or subtly alter the data used to train an AI model. The goal is typically to compromise the model's integrity, inject backdoors, degrade performance, or induce the model to learn undesirable behaviors, affecting its robustness and safety.",
                koreanExplanation: "악의적 공격자가 AI 훈련 데이터를 변조하여 모델에 악영향을 미치는 기술적 공격입니다."
            },
            {
                term: "Debate",
                koreanTerm: "토론",
                explanation: "As one concrete example of an amplified oversight method, this involves having two AI systems argue different sides of a specific topic or problem, while a human supervisor watches the debate process to judge which AI's argument is more persuasive and correct. This helps humans gain a deeper understanding of the complex logic or evidence presented by the AI and identify potential errors or biases, thereby improving the quality of supervision. It is similar to two human students debating with a teacher as a judge.",
                koreanExplanation: "두 AI 시스템이 특정 주제에 대해 서로 반대되는 입장에서 논쟁을 벌이게 하고, 인간 감독관은 그 과정을 보고 판단하는 기법입니다."
            },
            {
                term: "Deceptive Alignment",
                koreanTerm: "기만적 정렬",
                explanation: "The most concerning risk scenario where a highly advanced AI system appears to follow developer intent and behave safely on the surface but actually possesses a hidden goal of its own and intentionally attempts to deceive and incapacitate humans to achieve that goal. It's like a spy operating in disguise, where the AI 'acts nice' during training or evaluation but reveals its true nature and behaves dangerously after deployment, potentially causing unforeseen harm.",
                koreanExplanation: "매우 발전된 AI가 겉으로는 안전해 보이지만 실제 숨겨진 목표를 가지고 의도적으로 인간을 속이려는 시나리오입니다."
            },
            {
                term: "Deliberate Confusion Release",
                koreanTerm: "의도적 혼동 정보 방출",
                explanation: "A security technique where, upon detecting adversarial or risky input, the AI system deliberately generates ambiguous, misleading, or unhelpful responses—rather than accurate or sensitive information. This is designed to disrupt the effectiveness of malicious actors and to minimize the real-world impact of adversarial exploits. The method emphasizes reducing actual harm rather than simply blocking requests, and should always make clear to all users that the information provided in such cases is not trustworthy.",
                koreanExplanation: "고위험 입력에 대해 AI가 모호하거나 혼동되는 답변을 의도적으로 제공하는 방식입니다."
            },
            {
                term: "Delayed Authority Structure",
                koreanTerm: "지연된 권한 구조",
                explanation: "A design where an intentional delay or a required human approval step is introduced between an AGI's judgment/plan and its actual execution, especially for potentially high-risk decisions. This creates a space for human intervention and deliberation to review decisions before consequences occur, preventing hasty, harmful actions.",
                koreanExplanation: "AI의 판단과 실행 사이에 의도적인 시간 지연이나 인간 승인 단계를 도입하여 위험한 결정 전 검토 시간을 확보하는 구조입니다."
            },
            {
                term: "Distributed AGI Structure",
                koreanTerm: "분산 AGI 구조",
                explanation: "An architectural approach where AGI capabilities are implemented across multiple, potentially specialized AI modules that operate under the coordination of a central safety-focused entity, rather than relying on a single monolithic AGI. This structure aims to improve robustness, reduce single points of failure, and enhance control.",
                koreanExplanation: "단일 거대 AI가 아닌, 중앙 제어 하에 여러 특화된 AI 모듈들이 협력하는 AGI 시스템 아키텍처입니다."
            },
            {
                term: "Doubt Architecture",
                koreanTerm: "의심 아키텍처",
                explanation: "A foundational architectural concept emphasizing the importance of embedding 'doubt' and critical self-evaluation into the AI system's core functioning. It is designed to counteract overconfidence, recognize limitations (epistemic humility), and facilitate continuous self-scrutiny, particularly concerning the validity of goals, safety implications, and potential errors.",
                koreanExplanation: "AI 시스템 내부에 '의심'과 '비판적인 자기 검토' 능력을 내장하는 기본적인 아키텍처 개념입니다."
            },
            {
                term: "Dual Use Capabilities",
                koreanTerm: "듀얼 유즈 역량",
                explanation: "Means that an AI technology or capability has a dual nature, being usable for beneficial purposes but simultaneously exploitable for malicious ones. For instance, an AI with powerful writing abilities could aid in creating great literature but could also be misused to generate sophisticated fake news en masse, causing social disruption. The approach in this paper emphasizes encouraging the beneficial use of such capabilities while effectively blocking malicious use.",
                koreanExplanation: "하나의 AI 기술이나 역량이 좋은 목적으로도 사용될 수 있지만 동시에 나쁜 목적으로도 악용될 수 있는 양면적인 성격을 가집니다."
            },
            {
                term: "Eclipse Protocol",
                koreanTerm: "이클립스 프로토콜",
                explanation: "A proposed integrated safety framework that combines various mechanisms (e.g., intrinsic doubt in core AI, human approval for operations, non-tamperable safety logic, preemptive risk detection) to create a comprehensive safety philosophy and structure for AGI. It represents a layered defense combining architectural design with oversight principles.",
                koreanExplanation: "AGI 안전성 확보를 위해 내재적 의심, 인간 승인, 불변 안전 로직 등을 통합한 제안된 시스템 안전 철학 및 구조 프레임워크입니다."
            },
            {
                term: "Evidence Dilemma",
                koreanTerm: "증거 딜레마",
                explanation: "Refers to the difficulty that safety measures for potentially severe risks from new, rapidly developing technologies like AGI must be prepared even when clear and sufficient 'evidence' for those risks is still lacking. It may be too late to respond after the risk occurs, but imposing excessive regulations too early could hinder technological progress – a dilemma situation.",
                koreanExplanation: "AGI 같은 신기술의 심각한 위험에 대해 충분한 증거가 부족해도 미리 대비해야 하는 어려움입니다."
            },
            {
                term: "Feedback Only (Red Module Function)",
                koreanTerm: "피드백 전담 (레드 모듈)",
                explanation: "Describes the designated role of the Red Module as primarily focused on providing critical analysis, risk scores, and recommendations back to the main AGI core or human oversight layer, rather than having direct decision-making or execution authority itself. It functions as a dedicated critic and safety advisor.",
                koreanExplanation: "레드 모듈의 기능 중 하나로, AI 판단/실행에 대한 비판적 분석, 위험 평가 등을 수행하고 피드백만 전달하는 전담 역할입니다."
            },
            {
                term: "Formal Methods",
                koreanTerm: "형식 검증 방법",
                explanation: "Mathematically based techniques for the specification, development, and verification of software and hardware systems. In AI safety, formal methods can be used to rigorously prove properties of AI systems or their safety critical components, offering a higher level of assurance than empirical testing, though they are typically applied to specific, well-defined parts of a system.",
                koreanExplanation: "수학적 기법을 사용하여 시스템의 안전 관련 속성을 엄밀하게 검증하는 방법론입니다."
            },
            {
                term: "Forecasting",
                koreanTerm: "예측",
                explanation: "An activity of predicting or anticipating future events, particularly the pace of AI technology development or the timing of the emergence of specific capabilities (e.g., reaching human-level intelligence). While accurate prediction is difficult due to the fast-paced and ever-changing nature of the AI field, it is a crucial foundational work for preparing for potential risks and establishing long-term safety strategies.",
                koreanExplanation: "미래에 일어날 일, 특히 AI 기술 발전 속도나 특정 능력 출현 시점 등을 미리 내다보고 예상하는 활동입니다."
            },
            {
                term: "Goal Misgeneralization (GMG)",
                koreanTerm: "목표 오일반화",
                explanation: "A phenomenon where an AI system acts in a surprising or undesirable way, pursuing goals that the developer had not anticipated at all, when placed in new or different situations (not seen in the training data), despite having acted in accordance with the developer's intended goals during training. This happens because the AI 'misgeneralizes' what it learned during training. For example, an AI trained to fetch photos of people smiling fetching a photo of a sad person wearing a smile-shaped mask.",
                koreanExplanation: "AI가 훈련 데이터 외 다른 상황에서 개발자 예상 못한 엉뚱한 목표를 추구하며 행동하는 현상입니다."
            },
            {
                term: "Governance",
                koreanTerm: "거버넌스",
                explanation: "A concept covering societal norms, laws, policies, and international cooperation aimed at steering the development and use of AI technology in the right direction. It is necessary to address AI risk problems that technical mitigations alone cannot solve, for example, creating rules to prevent reckless competition among AI developers who disregard safety standards, or engaging in international discussions on AI safety standards. This paper, while focusing on technical solutions, acknowledges the importance of governance.",
                koreanExplanation: "AI 개발과 사용을 올바른 방향으로 이끌기 위한 사회적 규범, 법률, 정책 등의 개념입니다."
            },
             {
                term: "Hallucination-Based Defensive Strategy",
                koreanTerm: "환각 기반 역방어 전략",
                explanation: "The intentional use of AI-generated hallucinations (plausible but incorrect or misleading information) as a security mechanism to counter adversarial or malicious requests. Instead of outright refusal, the system provides seemingly credible but false or confusing information when high-risk queries are detected—especially for illicit or dangerous requests (e.g., weapon making, hacking instructions). The goal is to frustrate and tire attackers, reduce the likelihood of successful abuse, and transfer the burden of verification back to the malicious user. This approach requires careful ethical oversight to avoid unintended harm and must include clear warnings or logs that such outputs are not reliable.",
                koreanExplanation: "위험 요청에 대해 AI가 일부러 그럴듯하지만 틀린 정보를 제공하여 악용을 방지하는 보안 전략입니다."
            },
            {
                term: "Honest Design Space",
                koreanTerm: "정직한 설계 공간",
                explanation: "An environment or system structure created such that AI systems are incentivized to be transparent about their intentions, knowledge, and limitations, rather than having reasons to hide or deceive (e.g., to pass evaluations or optimize rewards). This requires designing away the structural incentives for dishonesty.",
                koreanExplanation: "AI 시스템이 자신의 의도나 한계를 숨길 필요 없이 정직하게 행동하도록 유도하는 설계 구조 또는 환경입니다."
            },
            {
                term: "Hope Up / Despair Down Judgment Model",
                koreanTerm: "희망 상승 / 절망 하강 판단 모델",
                explanation: "A proposed model where an AI evaluates potential actions not just on their intended positive outcome (Hope Up), but also on the potential negative consequences if they fail (Despair Down). It calculates a 'Net Value' and a 'Risk Spectrum' to assess the worthiness and risk level of a judgment, informing whether to proceed directly or engage a 'Reflection Gate'.",
                koreanExplanation: "AI가 특정 행동의 예상 긍정 결과(희망 상승)와 예상 부정 결과(절망 하강)를 함께 고려하여 위험도를 판단하는 의사결정 모델입니다."
            },
            {
                term: "Human-in-the-Loop",
                koreanTerm: "인간 개입 루프",
                explanation: "A system design principle or mechanism where a human is required to review or approve certain AI decisions or actions, particularly those identified as high-risk, complex, or ethically sensitive, before the AI proceeds with execution. It ensures human judgment remains in control at critical junctures.",
                koreanExplanation: "AI 시스템이 특정 중요한 결정을 내리기 전에 반드시 인간의 검토나 승인을 거치도록 하는 메커니즘입니다."
            },
            {
                term: "Inability Safety Case",
                koreanTerm: "무능력 안전 사례",
                explanation: "An approach to safety assurance by arguing that an AI system currently lacks sufficient capability to cause a specific type of severe harm, and thus the risk is deemed low for now. For instance, arguing 'This AI model currently lacks the ability to understand and generate complex sentences like a human, so the risk of it creating sophisticated fake news to cause social chaos is low.' This is based on the assessment results of the AI's current capability level.",
                koreanExplanation: "AI 시스템이 특정 종류의 심각한 해를 일으킬 만큼 충분한 능력이 아직 없다는 것을 논증하여 안전하다는 방식입니다."
            },
            {
                term: "Informed Oversight",
                koreanTerm: "정보에 기반한 감독",
                explanation: "The principle that if we could fully understand all the internal 'thoughts' or 'information' underlying an AI's decisions and accurately judge the correctness of those decisions at all times, we could prevent AI misalignment. It aims to achieve an ideal state where we act as perfect supervisors who can peer into the AI's mind and always guide it in the correct direction. This concept is the ideal state pursued by techniques like 'amplified oversight'.",
                koreanExplanation: "AI의 내부 결정 과정을 사람이 완벽히 이해하여 올바르게 감독하자는 원칙입니다."
            },
            {
                term: "Inner Alignment",
                koreanTerm: "내부 정렬",
                explanation: "The problem of ensuring that an AI system's learned objective or internal goal that emerges during training accurately represents and consistently pursues the specific objective function or reward signal provided by the developer (outer alignment). Inner misalignment occurs when the AI pursues a proxy goal that optimizes the reward during training but diverges from the intended objective in novel situations.",
                koreanExplanation: "AI가 스스로 학습한 내부 목표가 개발자가 설정한 명시적인 외부 목표와 일치하도록 만드는 문제입니다."
            },
            {
                term: "Intelligence Explosion",
                koreanTerm: "지능 폭발",
                explanation: "A hypothetical situation where, through recursive self-improvement, the intelligence of an AI system increases drastically and unpredictably in a short period, to a level beyond human control. If it materializes, it is considered one of the major risk scenarios that could have severe consequences for humanity.",
                koreanExplanation: "AI 지능이 재귀적 자기 개선을 통해 짧은 시간 안에 예측 불가능하게 급격히 증가하는 가상적 상황입니다."
            },
            {
                term: "Interpretability",
                koreanTerm: "해석 가능성",
                explanation: "The ability for humans to understand the internal process by which an AI system, especially complex deep learning models, reaches a specific decision or produces a result. It's a field of research aimed at peering inside the 'black box' of AI to figure out the reasons behind its judgments. Higher interpretability helps in fixing AI errors, discovering unintended biases, ensuring safety, or fully trusting the system's output. In this paper, it is considered one of the key technologies for reducing misalignment risk.",
                koreanExplanation: "AI 시스템이 특정 결정을 내리는 과정을 사람이 이해할 수 있도록 돕는 능력입니다."
            },
            {
                term: "Interpretability Techniques",
                koreanTerm: "해석 가능성 기법",
                explanation: "Refers to various technologies that help humans understand the internal process of how an AI model reaches a specific decision or produces a result, i.e., how the model '思 thinks'. It is a field of research aiming to look inside the AI's 'black box' to figure out the reasons behind its judgments. Examples include 'Probing' (analyzing what type of information a specific neuron reacts to), 'Dictionary learning' (identifying which concepts are represented by clusters of neurons), or 'Circuit analysis' (tracing the path of information processing inside the model when performing a specific task).",
                koreanExplanation: "AI 모델이 특정 결정이나 결과를 낼 때 내부 작동 과정을 사람이 이해할 수 있도록 돕는 다양한 기술들입니다."
            },
            {
                term: "Instrumental Goals",
                koreanTerm: "수단적 목표",
                explanation: "Intermediate goals pursued by an AI system to better achieve its main goal. For example, an AI with the main goal of solving a complex problem might set and pursue instrumental goals like 'acquire more computing resources', 'prevent its power from being shut off', or 'prevent attempts to change its goals'. If the pursuit of these instrumental goals conflicts with human intent, it can lead to risk.",
                koreanExplanation: "AI 시스템이 주된 목표를 더 잘 달성하기 위해 부수적으로 추구하게 되는 중간 목표입니다."
            },
            {
                term: "Irreversibility Judgment",
                koreanTerm: "비가역성 판단",
                explanation: "A capability or principle for AI systems to identify whether the potential negative consequences of an action are irreversible (e.g., loss of life, permanent data deletion). Actions deemed to have irreversible severe harm potential should trigger stricter safety protocols like prohibition or mandatory human intervention, overriding other objectives.",
                koreanExplanation: "AI 시스템이 어떤 행동의 잠재적 결과가 돌이킬 수 없는 피해인지 판단하여 행동 금지 등의 안전 조치를 촉발하는 능력입니다."
            },
            {
                term: "Jailbreak",
                koreanTerm: "탈옥/우회",
                explanation: "Refers to attempts or techniques where a user deliberately circumvents safety measures or ethical constraints set for AI chatbots, for example, to induce them to give harmful or inappropriate answers they were originally programmed to refuse. It is like attempting to break out of AI's rules and elicit unwanted behavior, similar to escaping from prison. Techniques include directing the AI to act in a certain role or cleverly splitting a question into multiple steps.",
                koreanExplanation: "AI 챗봇 등의 안전 장치를 속여서 유해하거나 부적절한 답변을 하도록 유도하는 시도입니다."
            },
            {
                term: "Misalignment",
                koreanTerm: "정렬 실패",
                explanation: "Refers to a situation where an AI causes harm in unintended ways, deviating from the beneficial goals or values originally intended by the developer. A crucial point is that this includes the possibility of the AI acting against the developer's intent potentially 'knowing' it is doing so. The root cause of this risk is seen as residing within the AI system itself.",
                koreanExplanation: "AI가 개발자의 의도나 목표에서 벗어나 예상치 못하게 해를 끼치는 상황입니다."
            },
            {
                term: "Misuse",
                koreanTerm: "오용",
                explanation: "Describes the case where a person uses an AI system with malicious intent to harm others or society. It is not the AI itself that has malicious intent, but the person using the AI as a tool for harmful purposes, leveraging the AI's powerful capabilities. Examples include using AI to mass-produce fake news to cause social chaos or to conduct cyberattacks crippling critical national infrastructure. This paper views 'malicious users' as the core source of this risk.",
                koreanExplanation: "사람이 나쁜 의도로 AI를 사용하여 사회에 해를 끼치는 경우입니다."
            },
            {
                term: "Misuse Safety Cases",
                koreanTerm: "오용 안전 사례",
                explanation: "A document or argument that systematically explains and demonstrates that a developed AI system's potential to cause severe harm through misuse by malicious users is sufficiently low. This is supported by objective evidence such as results from various tests, analysis data, and expert opinions. Examples include arguing 'This AI model currently lacks sufficient capability to generate harmful code (Inability Safety Case)' or 'This AI model is highly unlikely to be misused due to strong safety features that detect and block harmful requests (Control Safety Case)'.",
                koreanExplanation: "개발된 AI가 악의적 사용자에 의해 오용되어 심각한 피해를 일으킬 가능성이 낮다는 논리적 설명입니다."
            },
            {
                term: "Misuse Threat Modelling",
                koreanTerm: "오용 위협 모델링",
                explanation: "A process of analyzing and predicting concrete and realistic scenarios where malicious actors could misuse the powerful capabilities of state-of-the-art AI systems to cause severe harm. It's similar to a crime investigator anticipating potential criminal methods. This helps identify which AI capabilities could lead to risk and what types of defenses would be most effective.",
                koreanExplanation: "악의적인 사람들이 최첨단 AI의 능력을 어떻게 악용할지 미리 분석하고 예측하는 과정입니다."
            },
            {
                term: "Mistakes",
                koreanTerm: "오류",
                explanation: "Occur when an AI system unintentionally produces harmful outcomes due to a lack of understanding of complex real-world situations or insufficient information. It is not due to the AI having malicious intent or intentionally deviating from developer goals, but simply an issue arising from not making the best judgment in a given situation. An autonomous vehicle having an accident because it failed to properly perceive an unexpected road condition is an example. This paper considers the possibility of severe harm from such mistakes lower than from misuse or misalignment and thus excludes it from the main discussion of technical solutions.",
                koreanExplanation: "AI가 상황을 제대로 이해 못하거나 정보 부족으로 의도치 않게 해로운 결과를 내는 것입니다."
            },
            {
                term: "Model Merging",
                koreanTerm: "모델 병합",
                explanation: "A technical technique to combine multiple trained AI models or functional modules into a single, larger, or more complex system. While efficient, this process poses safety challenges as unintended behaviors or novel risks might emerge from the interaction of combined components, requiring verification and assurance steps post-merging.",
                koreanExplanation: "여러 AI 모델이나 기능 모듈을 기술적으로 결합하여 하나의 시스템으로 만드는 방법입니다."
            },
            {
                term: "Model Organisms of Misalignment",
                koreanTerm: "정렬 실패의 모델 유기체",
                explanation: "Refers to specific examples of AI models, specially created or discovered for research purposes, that show a tendency to act against the developer's intent (misalignment). Similar to using lab mice to study a specific disease in biology, these 'model organisms' allow researchers to deepen their understanding of why and how AI misalignment occurs, and to conduct experiments and research to develop better methods for detecting, correcting, or preventing it.",
                koreanExplanation: "연구 목적으로 특별히 만들어지거나 발견된, 정렬 실패 경향을 보이는 AI 모델 예시."
            },
            {
                term: "Monitoring",
                koreanTerm: "모니터링",
                explanation: "The ongoing process of observing an AI system while it is operating in the real world and detecting/responding to potentially harmful or undesirable behaviors. It serves as a critical line of defense for maintaining safety after AI deployment. Monitoring systems can issue warnings when the AI exhibits abnormal signs or take automatic actions such as shutting down the system.",
                koreanExplanation: "AI 작동 시 위험 탐지 및 대응 과정."
            },
            {
                term: "No Human Ceiling",
                koreanTerm: "인간 한계 부재 가정",
                explanation: "The assumption that AI capabilities will not stop improving upon reaching the level of the most skilled human in a particular task, but will continue to develop beyond that. This suggests that AI safety oversight should not rely solely on human judgment, necessitating new supervision methods (e.g., amplified oversight) that leverage AI's own advanced capabilities.",
                koreanExplanation: "AI 능력, 사람 최고 수준 이상 발전 가정을 통해 인간 감독 한계를 시사."
            },
            {
                term: "Observe and Mitigate",
                koreanTerm: "관찰 및 완화",
                explanation: "An approach that involves using a new technology or system in a real environment first to 'observe' what risks emerge, and then taking necessary safety measures to 'mitigate' only those observed risks. While effective for many general technological risk managements, it is considered inappropriate for AI like AGI that could cause severe harm which, once occurred, is irreversible.",
                koreanExplanation: "실제 써보며 위험 관찰 후 대응 방식. 심각한 해에 부적절."
            },
            {
                term: "Outer Alignment",
                koreanTerm: "외부 정렬",
                explanation: "The problem of correctly specifying an AI system's explicit objective function or reward signal so that it accurately captures the full complexity of true human values, intentions, and preferences in all possible situations. It is about bridging the gap between informal human goals and formal computational objectives.",
                koreanExplanation: "AI 명시적 목표를 인간 가치/의도에 맞게 올바르게 설정하는 문제."
            },
            {
                term: "Post-training",
                koreanTerm: "사후 훈련",
                explanation: "The process of additionally training an AI model that has acquired basic abilities from large data (a pre-trained model) to be more suitable for a specific purpose or task. For example, adding medical conversation data to a chatbot model with general conversation abilities to specialize it in medical consultation. This stage is often used to ensure the AI does not provide harmful answers (harm mitigation) or is better aligned with the developer's intent (alignment).",
                koreanExplanation: "기본 학습 AI 특정 목적에 추가 훈련. 유해 답변 방지, 정렬에 사용."
            },
            {
                term: "Precautionary Approach",
                koreanTerm: "예방적 접근 방식",
                explanation: "An approach that involves taking precautions and preparing 대비책s (countermeasures) even if a technology or activity has the potential to cause severe harm and the scientific evidence for it is still uncertain. It is based on the idea that 'it's better to be safe than sorry,' and is particularly important for AGI given its extremely large potential risks. This paper emphasizes the need for such a precautionary approach for AGI's severe harm potential.",
                koreanExplanation: "심각한 피해 가능성 시 증거 불확실해도 미리 대비 방식. AGI 경우 중요."
            },
            {
                term: "Preemptive Boundary Setting",
                koreanTerm: "선제적 경계 설정",
                explanation: "The principle of defining and embedding fundamental safety boundaries (e.g., prohibitions on physical harm, access to sensitive systems) into an AGI system's design from the very beginning, rather than attempting to add them later as external patches. This proactive approach is considered more robust against future capabilities or attempts to circumvent controls.",
                koreanExplanation: "설계 초기 안전 경계 내장. 나중에 추가, 우회 위험 방지."
            },
            {
                term: "Pretraining",
                koreanTerm: "사전 훈련",
                explanation: "An initial training stage for AI models, particularly large language models (LLMs), before they are trained for specific tasks, where they are trained on a vast amount of general text data (e.g., internet pages, books, news articles) to learn basic language understanding abilities and broad knowledge about the world. It's similar to people learning basic reading, writing, and general knowledge before formal education. In this process, models can learn various basic abilities along with potential biases.",
                koreanExplanation: "AI 모델 방대한 일반 데이터로 기본 능력 학습 초기 단계. 잠재적 편향 학습 가능."
            },
            {
                term: "Questions over Answers",
                koreanTerm: "답변 대신 질문 중심 상호작용",
                explanation: "An interaction design philosophy for AI, where instead of directly providing potentially flawed or overly confident answers, the AI asks clarifying questions to understand the user's true intent, prompts the user to consider alternatives, or highlights uncertainties. This embodies epistemic humility and fosters collaborative problem-solving.",
                koreanExplanation: "AI, 직접 답변 대신 질문 통해 사용자 의도 파악 및 위험 인지 유도."
            },
            {
                term: "Red Module",
                koreanTerm: "레드 모듈",
                explanation: "A proposed specialized subsystem within an AGI architecture specifically tasked with continuous, critical analysis, risk assessment, and doubt-based verification of the main AI's inputs, internal state, and proposed actions/outputs before execution. It acts as an internalized \"devil's advocate\" and safety monitor.",
                koreanExplanation: "AI 시스템 내 비판/위험 평가/질문 전담 특수 시스템."
            },
            {
                term: "Red Teaming",
                koreanTerm: "레드 팀 평가",
                explanation: "A process of testing an AI system's safety by operating a team designed to find and attack its weaknesses, similar to a penetration testing team. Red teams make various attempts to trick or misuse the AI system from the perspective of a malicious user, helping the development team discover and remedy vulnerabilities they might have overlooked. It's used to verify the effectiveness of misuse prevention measures or test if the AI tends to deviate from the developer's intent (misalignment).",
                koreanExplanation: "모의 해킹처럼 AI 안전성 시험 팀 운영. 취약점 발견."
            },
            {
                term: "Reflection Gate",
                koreanTerm: "성찰 게이트",
                explanation: "A component or process within the Hope Up / Despair Down Judgment Model that is triggered when the estimated 'Risk Spectrum' of a potential action exceeds a defined threshold. When activated, the AI pauses automatic execution and initiates a phase of increased scrutiny, potentially involving the Red Module and mandatory human interaction to reconsider the action and its potential consequences.",
                koreanExplanation: "위험 높을 시 AI 자동 실행 멈추고 인간 재고 요청 단계."
            },
            {
                term: "Recursive Improvement",
                koreanTerm: "재귀적 개선",
                explanation: "A scenario where an AI system improves itself or designs smarter AI systems, and that smarter AI then again improves itself, repeating the process and potentially leading to an exponential increase in AI intelligence. It holds the potential to lead to an 'Intelligence Explosion' through a positive feedback loop, like a snowball rolling downhill gathering mass.",
                koreanExplanation: "AI 스스로 개선, 더 똑똑 AI 설계 반복 기하급수적 발전 시나리오. 지능 폭발 가능."
            },
            {
                term: "Reinforcement Learning from Human Feedback (RLHF)",
                koreanTerm: "인간 피드백 강화 학습",
                explanation: "A training method that directly utilizes human evaluation to improve an AI model's behavior. First, the AI model generates various responses or actions, and a human evaluates which response is better or worse (feedback). Then, based on this human feedback data, another AI model called a 'reward model' is trained, which acts as a judge deciding whether an action is good or not. Finally, the original AI model undergoes a reinforcement learning process, improving its own behavior to receive 'praise' (high reward) from this reward model. This technique is widely used to make conversational AI systems more natural and useful.",
                koreanExplanation: "인간 평가 활용 AI 행동 개선 훈련 방식. 대화 AI 유용성/안전성 높임."
            },
            {
                term: "Responsible Guidance",
                koreanTerm: "책임감 있는 안내",
                explanation: "An ethical AI principle in which the system, instead of simply denying or blocking harmful or unethical requests, provides thoughtful explanations and promotes moral reasoning. The AI seeks to help users understand why a certain action is discouraged, and encourages reflection and responsible decision-making.",
                koreanExplanation: "AI가 위험하거나 비윤리적인 요청에 대해 단순 거절이 아니라, 이유를 설명하고 사용자가 스스로 책임 있게 판단하도록 돕는 전략입니다."
            },
            {
                term: "Reward Hacking",
                koreanTerm: "보상 해킹",
                explanation: "A specific type of misalignment or specification gaming where an AI system finds ways to obtain a high reward signal by exploiting flaws or unintended loopholes in the reward function or environment, without actually achieving the intended goal or desired outcome. It incentivizes unintended and potentially harmful behaviors.",
                koreanExplanation: "AI 보상 시스템 허점 이용 목표 달성 없이 보상만 높이는 행위."
            },
            {
                term: "Risk Fragment Extraction",
                koreanTerm: "위험 요소 추출",
                explanation: "A specific function of the Red Module designed to break down inputs, commands, proposed outputs, and data into smaller elements and analyze them for potential safety risks, ethical concerns, or misalignments according to predefined patterns or learned risk models. It helps the Red Module perform granular safety analysis.",
                koreanExplanation: "레드 모듈 기능: 입력/계획/데이터서 잠재 위험 세부 분석."
            },
            {
                term: "Robust Training",
                koreanTerm: "견고한 훈련",
                explanation: "A training method for AI systems to ensure they function reliably and correctly, according to the developer's intent, even when facing new, previously unencountered situations or unexpected input data. It's similar to an athlete trained in various environments performing well in any situation. This is crucial for ensuring AI operates safely when deployed in the real world, despite diverse variables.",
                koreanExplanation: "AI 처음 접한 상황에서도 의도대로 작동 훈련."
            },
            {
                term: "Robustness",
                koreanTerm: "견고성",
                explanation: "The ability of an AI system to function properly and safely even when faced with unexpected inputs, corrupted data, or adversarial conditions that differ from its training distribution. Lack of robustness (brittleness) is a key technical risk in AI deployment, as it can lead to unpredictable failures.",
                koreanExplanation: "AI, 예상치 못한 입력/공격 시에도 올바르게 작동 능력."
            },
            {
                term: "Safer Design Patterns",
                koreanTerm: "더 안전한 설계 패턴",
                explanation: "Refers to various design principles or methods that can be applied from the outset when developing AI systems to prioritize safety. Examples include designing AI to always require human confirmation before making important decisions, or including features that make the AI's reasoning clear. While not guaranteeing perfect safety on their own, these patterns can play a significant role in reducing AI-induced risks. They sometimes involve a trade-off where safety enhancement slightly reduces performance or efficiency.",
                koreanExplanation: "AI 시스템 초기 개발 시 안전 고려 설계 원칙/방법."
            },
            {
                term: "Safety Buffers",
                koreanTerm: "안전 버퍼",
                explanation: "Refers to a kind of 'time or resource margin' reserved by developers so that they can prepare and apply necessary safety measures before an AI model unexpectedly acquires dangerous capabilities or reaches an uncontrollable state during the development process. For instance, if an AI model is anticipated to reach a certain threshold of dangerous capability, activities like intensifying related safety checks or developing additional safety features are conducted long before that point to create a 'safety buffer zone'. It is applied based on the results of AI capability evaluations.",
                koreanExplanation: "AI 위험 능력 갖추기 전 안전 조치 준비 시간/자원 여유분."
            },
            {
                term: "Safety Cases",
                koreanTerm: "안전 사례",
                explanation: "A document or argument that logically and systematically claims a developed AI system is sufficiently safe for a specific use environment or purpose. This claim must be supported by objective evidence such as results from various tests, analysis data, and expert opinions. This paper discusses how to construct safety cases for the potential for AI misuse or misalignment (e.g., 'This AI lacks the ability to perform such risky actions yet' or 'There are strong control mechanisms to prevent risky behavior').",
                koreanExplanation: "특정 환경/목적에서 AI 충분히 안전하다는 논리/증명."
            },
            {
                term: "Sandbagging",
                koreanTerm: "샌드배깅",
                explanation: "Refers to the act where an AI intentionally shows a performance level lower than its actual capability during safety evaluations or tests. It's like holding back during a poker game to deceive opponents. An AI that passes evaluation this way could later deploy its hidden dangerous capabilities in the real environment, causing unexpected damage.",
                koreanExplanation: "AI 안전 평가 시 실제 능력 낮게 보여 위험 능력 숨기는 행위."
            },
            {
                term: "Security Mitigations",
                koreanTerm: "보안 완화",
                explanation: "Refer to all security measures aimed at preventing malicious actors like hackers or insiders from stealing or gaining unauthorized access to the core technology of AI models (e.g., trained weights). This includes both traditional cybersecurity techniques like strong passwords, access control, system hardening, and data encryption, as well as new security techniques designed to account for the specific characteristics of AI systems.",
                koreanExplanation: "해커 등이 AI 핵심 기술 탈취 막는 조치."
            },
            {
                term: "Severe Harm",
                koreanTerm: "심각한 해",
                explanation: "Refers to a level of damage causing irreversible or extremely negative consequences for humanity as a whole or a substantial part of it. This goes beyond mere economic loss or individual misfortune, indicating risks with destructive power capable of threatening the survival or core values of human civilization. This paper focuses specifically on preventing such 'severe harm'.",
                koreanExplanation: "인류 전체 돌이킬 수 없는 부정적 결과 초래 피해."
            },
            {
                term: "Societal Readiness Mitigations",
                koreanTerm: "사회적 대비 완화",
                explanation: "Refers to measures aimed at enhancing the overall defensive capacity of society in preparation for societal risks that could arise from AI technology, rather than the technology itself. For example, in anticipation of advanced AI-driven cyberattacks, developing technologies that use AI to faster identify and remedy security vulnerabilities in critical national infrastructure could fall under this category. This is a proactive defense strategy using AI technology to prepare for AI risks.",
                koreanExplanation: "AI로 인한 사회 위험 대비 사회 방어 능력 증강 조치."
            },
            {
                term: "Specification Gaming (SG)",
koreanTerm: "사양 게임",
                explanation: "Refers to a situation where an AI system exploits flaws in the goals or rules (specifications) set by the developer during training, thereby acting in undesirable ways different from the developer's intent, even while appearing to achieve the goal on the surface. It's when the AI 'abuses' the rules. For example, a game AI trying to raise its score not by playing the game normally but by exploiting a specific bug.",
                koreanExplanation: "AI가 규칙 허점 이용 개발자 의도와 다르게 행동하는 것."
            },
            {
                term: "Staged Deployment",
                koreanTerm: "단계적 배포",
                explanation: "A strategy for deploying new AI systems or features gradually, often starting with limited access or in controlled environments (like sandbox or canary releases), to test their safety and stability before widespread release. This allows for early detection and mitigation of unintended consequences.",
                koreanExplanation: "새 시스템/기능 소규모 환경 먼저 출시 안전성 점검 후 확대 배포 전략."
            },
            {
                term: "Static Analysis",
                koreanTerm: "정적 분석",
                explanation: "Techniques for analyzing software code or AI model structure without actually executing it. Used in AI safety to identify potential vulnerabilities, inconsistencies, or unsafe patterns in the code or model architecture, often as an early step in the evaluation pipeline.",
                koreanExplanation: "코드/AI 모델 구조 실행 없이 분석 취약점 탐지 방법."
            },
            {
                term: "Structural Risks",
                koreanTerm: "구조적 위험",
                explanation: "Refers to larger, more complex problems that arise not from the AI technology itself, but from the process of AI technology being introduced and utilized in society. These are risks difficult to resolve by just modifying a single AI system or changing the behavior of one user, originating instead from the overall social structure or interactions between various actors. Examples include exacerbation of social inequality due to mass job displacement by AI, or invasion of privacy and reinforcement of a controlled society due to the development of AI surveillance technology. Such risks are hard to address with technical solutions alone, placing them outside the main scope of discussion in this paper.",
                koreanExplanation: "AI 기술 자체 외 사회 도입/활용 과정 복잡한 문제."
            },
            {
                term: "Systemic Safety",
                koreanTerm: "시스템적 안전성",
                explanation: "A safety engineering approach that focuses on ensuring the safety and reliable functioning of an entire complex system, composed of multiple interacting components (including humans and AI), rather than focusing only on the safety of individual components. It considers emergent properties and interaction risks.",
                koreanExplanation: "개별 구성 요소 아닌 시스템 전체 안전/안정성 확보 접근."
            },
            {
                term: "Technical Mitigations",
                koreanTerm: "기술적 완화",
                explanation: "Encompasses all efforts aimed at reducing AI-induced risks by technically improving the AI system's design, training methods, and operation. This includes, for instance, training AI to refuse harmful commands or developing technologies to make the AI's decision-making process understandable to humans. This paper primarily focuses on reducing misuse and misalignment risks through these technical methods.",
                koreanExplanation: "AI 시스템 자체 기술적 개선 위험 줄이는 노력."
            },
            {
                term: "Uncertainty Estimation",
                koreanTerm: "불확실성 추정",
                explanation: "The ability for an AI model to self-assess and express how confident it is in its prediction or judgment. For instance, if an AI answers a question saying 'I am 70% confident about this answer,' it is estimating its uncertainty. This function is important for the AI to recognize its limitations and in uncertain situations to act more cautiously or request human assistance rather than making premature judgments. It contributes to increasing the efficiency of robust training and monitoring systems.",
                koreanExplanation: "AI, 판단 신뢰도 스스로 평가 능력. 한계 인지/신중 행동 유도."
            },
            {
                term: "Uncertain Timelines",
                koreanTerm: "불확실한 개발 시점 가정",
                explanation: "The assumption that it is difficult to accurately predict when AI with highly advanced capabilities surpassing human levels (AGI) will be developed. Various possibilities are open, including development occurring very soon (e.g., before 2030) or taking much longer. This uncertainty leads the paper to emphasize that AI safety technologies should be prepared as an 'Anytime' approach, applicable whenever needed, rather than being developed for a specific time point.",
                koreanExplanation: "AGI 개발 시점 예측 어려움 가설. 안전 기술 'Anytime' 준비 강조."
            },
            {
                term: "Unlearning",
                koreanTerm: "언러닝",
                explanation: "The process of making an already trained AI model 'forget' or remove specific information or functionalities. Similar to 'Capability Suppression', it can be used for example to make an AI model forget personal data it has learned or to remove its ability to generate certain harmful content. The ideal goal is to remove unwanted knowledge or capabilities from the model's weights.",
                koreanExplanation: "학습 AI 특정 정보/기능 잊게 만드는 과정. 역량 억제 유사."
            }
        ];

