import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignupStep1 = () => {
    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
        if (checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    }

    const handleAllCheck = (checked) => {
        if(checked) {
          // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
          setCheckItems(['option-1', 'option-2', 'option-3']);
        }
        else {
          // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
          setCheckItems([]);
        }
      }
    console.log(checkItems);
    return (
        <div className="Signup">
            <Container>
                <Row>
                    <Col sm md id="signup-section">
                        <h1>회원가입</h1>
                        <h2>01 약관동의</h2>
                        | 이용약관
                        <div className="msg">
                        제1장 총칙
제 1 조 (목적)
이 약관은 (주)한솥(이하 "회사"라 합니다)이 제공하는 웹사이트 및 주문앱 서비스(이하 "서비스"라 합니다)의 이용조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.

제 2 조 (약관의 효력과 변경)
① 이 약관은 그 내용을 회사가 웹사이트 및 주문앱에 게시하거나 기타의 방법으로 회원에게 공지함으로써 그 효력이 발생합니다.

② 회사는 합리적인 사유가 있는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 게시 또는 공지함으로써 효력이 발생합니다.

③ 회원은 변경된 약관에 동의하지 않으면 언제든지 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다. 약관의 효력발생일 이후의 계속적인 서비스 이용은 약관의 변경사항에 동의한 것으로 간주됩니다.

제 3 조 (약관 외 준칙)
이 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 등에 관한 법률, 전자거래기본법, 전자서명법 및 기타 관련 법령의 규정에 따릅니다.

제 4 조 (용어의 정의)
① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

1.회원 : 회사와 서비스 이용에 관한 계약을 체결하고 이용자 아이디를 부여 받은 자
2.아이디(ID) : 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자, 숫자 또는 양자의 조합
3.비밀번호 : 회원의 본인 확인과 비밀 보호를 위해 회원 자신이 설정한 문자, 숫자 또는 양자의 조합
4.이용계약 : 서비스를 제공받기 위하여 이 약관으로 회사와 회원 간에 체결하는 계약
5.해지 : 회사 또는 회원이 서비스 개통 후 이용계약을 해약하는 것
6.운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 사람
② 제1항의 용어를 제외한 용어의 정의는 거래 관행 및 관계 법령에 따릅니다.

제2장 서비스 이용계약의 체결
제 5 조 (서비스의 구분)
① 회사가 회원에게 제공하는 서비스는 기본서비스와 부가서비스 등으로 구분합니다.

② 서비스의 구체적인 종류와 내용은 회사가 이 약관 또는 공지, 이용 안내 등에서 별도로 정하는 바에 따릅니다.

제 6 조 (이용계약의 성립)
이용계약은 서비스를 이용하고자 하는 자의 이용 신청에 대한 회사의 이용 승낙으로 성립합니다.

제 7 조 (이용 신청)
① 서비스를 이용하고자 하는 자는 회사 웹사이트 및 주문앱의 "회원가입" 메뉴에서 회원 약관에 동의하면 회사 소정의 가입신청 양식에 요구하는 사항을 기재하고 '가입' 버튼을 누르면 됩니다.

② 회원 가입을 하면 이 약관에 동의하는 것으로 간주됩니다.

③ 온라인 가입 신청 양식에 기재하는 모든 회원 정보는 실제와 일치하는 데이터인 것으로 간주됩니다. 실명이나 실제와 일치하는 정보를 입력하지 않은 자는 법적인 보호를 받을 수 없으며 서비스의 이용을 제한 받을 수 있습니다.

제 8 조 (이용 신청의 승낙)
회사는 제7조의 규정에 의한 이용 신청에 대하여 원칙적으로 즉시 이용 신청을 승낙하며, 이용 승낙의 사실을 회원에게 전자우편으로 통보합니다.

제 9 조 (이용 신청의 불승낙 및 보류)
① 회사는 다음 각 호에 해당하는 경우 이용 신청에 대하여 승낙을 하지 않을 수 있습니다.

1. 가명, 차명, 허무인 명의 기타 이용신청자 본인의 실제 성명과 다른 명의에 의한 신청
2. 이용 신청 시 가입신청 양식상의 기재 사항을 허위로 하여 신청한 경우
3. 이용신청자가 회사의 채무자로서 채무를 완제하지 않고 있는 경우
4. 이용신청자가 이 약관 제23조 제2항에 의거하여 이용계약이 해지된 적이 있는 경우
5. 기타 이용신청자의 귀책사유로 이용 승낙이 곤란한 경우
② 회사는 다음 각 호에 해당하는 경우에는 그 사유가 해소될 때까지 이용 승낙을 보류할 수 있으며, 그 사유를 웹사이트 및 주문앱에 공지합니다.

1. 설비의 여유가 없는 경우
2. 기술 상 또는 업무 수행 상 지장이 있는 경우
제 10 조 (이용계약 사항의 변경)
① 회원은 이용 신청 시 기재한 사항이 변경되었을 경우에 온라인으로 수정합니다.

② 회원의 이용 신청 시 기재사항의 미변경 또는 허위 변경으로 인하여 발생되는 문제에 대한 책임은 회원에게 있습니다.

③ 회사는 다음 각 호에 해당하는 경우에 직권에 의하여 아이디의 사용을 제한하거나 회원의 신청에 의하여 아이디를 변경할 수 있습니다.

1. 아이디가 미풍양속을 해하는 경우
2. 아이디가 회원의 사생활을 침해할 우려가 있는 경우
3. 기타 합리적인 사유가 있는 경우
제3장 서비스의 이용
제 11 조 (서비스의 이용 개시)
회사는 제8조의 규정에 따라서 이용신청을 승낙한 때로부터 즉시 서비스를 개시합니다. 다만, 회사의 업무상 또는 기술상의 장애로 인하여 즉시 서비스를 개시하지 못하는 경우, 회사는 이를 회사의 웹사이트 및 주문앱에 공지하거나 회원에게 통지하여야 합니다.

제 12 조 (서비스의 내용)
①회사가 제공하는 서비스는 다음과 같습니다.

1. 당사 제품의 소개
2. 각종 이벤트
3. 제품 구입처 안내
4. 게시판 서비스
② 회사는 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있으며, 추가 또는 변경 내용은 회사의 및 주문앱에 공지합니다.

제 13 조 (서비스의 이용 요금)
① 별도로 표시된 유료 서비스를 제외한 모든 서비스는 회원들에게 무료로 제공됩니다.

제4장 계약당사자의 권리와 의무
제 14 조 (개인 정보의 보호)
① 회사는 정보통신망이용촉진 등에 관한 법률 등 관계 법령에 따라 이용 신청 시 제공받은 회원의 개인 정보, 추후에 추가로 제공받는 개인 정보 및 서비스 이용 중 생성되는 개인 정보를 보호합니다.

② 개인 정보의 수집 목적 및 이용 목적은 다음 각 호와 같으며, 회사는 회원의 별도의 사전 동의 없이 이 목적을 넘어서는 개인 정보의 수집 및 이용을 하지 않습니다.

1. 서비스의 제공
2. 서비스를 위한 회원의 관리
③ 회사는 개인 정보를 회원의 별도의 사전동의 없이 제3자에게 제공하지 않습니다. 다만, 다음 각 호의 경우에는 회원의 별도의 동의 없이 제3자에게 회 원의 개인 정보를 제공할 수 있습니다.

1. 법령에 특별한 규정이 있는 경우
2. 서비스 제공에 따른 요금정산을 위하여 필요한 경우
3. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공되는 경우
④ 회원은 언제든지 자신의 개인 정보를 열람할 수 있으며, 오류를 수정할 수 있습니다. 열람 및 수정은 원칙적으로 이용 신청과 동일한 방법으로 하며, 자세한 방법은 별도로 정한 "개인정보보호정책" 및 이용안내에 정한 바에 따릅니다.

⑤ 회원은 언제든지 개인 정보의 수집 및 이용에 대한 동의, 고지 또는 명시된 범위를 초과하는 이용 및 제3자 제공에 대한 동의를 철회할 수 있으며, 이 경우 회사는 지체 없이 필요한 조치를 취합니다. 다만 회원이 개인 정보의 수집 및 이용에 대한 동의를 철회한 경우에 회사는 이용계약을 해지할 수 있습니다.

⑥ 회사의 개인 정보 관리책임자를 비롯한 개인정보보호에 관한 기타 사항은 별도로 정한 "개인정보보호정책"에 기재하여 공지합니다.

제 15 조 (회사의 의무)
① 회사는 이 약관이 정하는 바에 따라 지속적이고 안정적인 서비스를 제공하는 데 최선을 다해야 합니다.

② 회사는 회원의 신용정보를 포함한 개인신상정보의 보안에 대하여 기술적 안전 조치를 강구하고 관리에 만전을 기함으로써 회원의 개인정보 보안에 최선을 다해야 합니다.

③ 회사는 회원으로부터 제기되는 의견 및 불만사항이 정당하다고 판단되는 경우 그 사항을 신속히 처리하여야 합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리 일정을 통지하여야 합니다.

④ 회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 회원과의 계약 관련 절차 및 내용 등에 있어 회원에게 편의를 제공하도록 노력합니다.

⑤ 회사는 공정하고 건전한 운영과 지속적인 연구 개발을 통하여 양질의 서비스를 제공함으로써 고객만족을 극대화하여 인터넷 비즈니스 발전에 기여하도록 합니다.

제 16 조 (회원의 의무)
① 회원은 서비스를 이용함에 있어 다음 각 호의 행위를 하여서는 안됩니다.

1. 가명, 차명, 허무인 명의 기타 회원의 실제 성명과 다른 명의에 의해 이용 신청을 하는 행위
2. 허위의 개인정보를 기재하거나 중복하여 가입하는 행위
3. 타인의 서비스 아이디 및 비밀번호를 도용하는 행위
4. 타인의 지적재산권을 침해하는 행위
5. 타인의 명예를 훼손하거나 사생활을 침해하는 행위
6. 게시판이나 대화실 등에서 욕설, 비방 또는 음란, 폭력적인 내용의 표현을 하는 행위
7. 과실 또는 고의로 허위의 정보를 공개 또는 유포하는 행위
8. 다량의 정보를 전송하거나 동일한 또는 유사한 내용의 정보를 반복적으로 게시하여 서비스의 안정적인 운영을 방해하는 행위
9. 광고성 정보를 수신자의 의사에 반하여 전자우편으로 일시에 다량으로 또는 지속적으로 전송하거나 게시판에 게시하여 다른 회원의 서비스 이용을 방해하는 행위
10. 정보통신설비의 오작동이나 정보 등의 파괴를 유발하는 컴퓨터 바이러스 등을 유포하는 행위
11. 회사의 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위
12. 회사의 정상적인 경영 또는 업무를 방해하거나 서비스의 운영을 방해하는 행위
13. 불법선거운동을 하는 행위
14. 기타 미풍양속을 해하거나 관련법령 및 이 약관을 포함하여 회사가 정한 이용 조건에 위반하는 행위
② 회원은 아이디 및 비밀번호의 관리에 상당한 주의를 기울여야 합니다. 아이디와 비밀번호에 관한 모든 관리 책임은 회원에게 있으며, 회원에게 부여된 아이디 및 비밀번호의 관리 소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다. 회원은 자신의 아이디 또는 비밀 번호가 부정하게 사용된 경우 반드시 회사에 그 사실을 통보하여야 합니다.

③ 회원은 회사의 사전 서면 동의 없이 서비스를 이용하여 영리적인 목적의 영업 행위를 하여서는 안됩니다. 이를 위반한 영업 행위의 결과에 대하여 회사는 책임을 지지 않으며, 이와 같은 영업 행위의 결과로 회사에 손해가 발생한 경우, 회원은 회사에 대하여 손해배상의 의무를 집니다.

④ 회원은 명시적 동의가 없는 한 회사의 서비스의 이용 권한, 기타 이용계약 상의 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공하거나 기타 처분할 수 없습니다.

제 17 조 (지적재산권 등)
① 회사가 작성하여 제공하는 서비스에 관한 저작권 및 기타 지적재산권은 회사에 속합니다. 회원은 회사가 제공하는 서비스를 회사의 사전동의 없이 영리 목적으로 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 이용하거나 제3자에게 이용하게 하여서는 안됩니다.

② 회원이 서비스에 게재한 게시물, 자료에 관한 권리와 책임은 게시한 회원에게 있습니다. 회사는 회원이 게재한 게시물, 자료에 대하여 서비스 내의 게재권을 가지며, 게재한 회원의 동의 없이 이를 영리적인 목적으로 사용하지 아니합니다.

③ 회사는 제19조의 의무를 위반하는 내용을 담고 있는 게시물에 대하여 수정 또는 삭제할 권한을 갖습니다. 이에 대한 구체적인 기준과 절차는 별도의 규정에 따릅니다.

제5장 서비스의 이용 제한 및 계약의 해지
제 18 조 (서비스 이용 제한 등)
① 회사는 회원이 제16조의 의무를 위반한 경우 회원의 서비스 이용을 일부 또는 전부 제한할 수 있습니다.

② 제1항의 규정에 의하여 회원의 서비스 이용을 제한하는 경우, 제한의 종류 및 기간 등 구체적인 기준은 별도의 규정에 따릅니다.

제 19 조 (이용 제한 및 제한 해제의 절차)
① 회사는 제18조의 규정에 의하여 이용제한을 하고자 하는 경우 그 사유, 일시 및 기간을 정해 전자우편 또는 전화 등의 방법에 의하여 해당 회원 또는 그 대리인에게 통지하여야 합니다. 다만 회사가 긴급하게 이용을 제한할 필요가 있다고 인정하는 경우에는 그러하지 아니합니다.

② 제1항의 규정에 의하여 이용 제한의 통지를 받거나 긴급하게 이용 제한 조치를 받은 회원 또는 그 대리인은 전자우편 또는 서면의 방법에 의하여 회사에 이의를 제기할 수 있습니다.

③ 회사는 제2항의 규정에 의한 이의신청에 대하여 그 확인을 위한 기간까지 이용제한을 일시 연기할 수 있으며, 그 결과를 당해 회원 또는 그 대리인에게 통지합니다.

④ 회사는 이용 제한 기간 중 그 사유가 해소되는 등의 합리적인 사유가 있는 경우 이용 제한 조치를 해제합니다.

제 20 조 (계약의 해지)
① 회원은, 이용계약을 해지하고자 하는 경우, 회사 웹사이트 및 주문앱의 "회원탈퇴" 메뉴에서 탈퇴 신청을 하여야 합니다. 회사는 회원의 탈퇴 신청을 빠른 시간 내에 처리하여야 합니다.

② 회사는, 회원이 제19조의 의무를 위반한 경우 사전 통지를 거쳐 이용계약을 해지하고 회원탈퇴 처리할 수 있습니다. 다만, 그 내용이 중하여 회사의 정상적인 경영이나 업무 활동 또는 서비스 운영에 지장이 있는 경우 사전통지 없이 계약을 해지하고 탈퇴 처리를 할 수 있습니다. 그 구체적인 기준과 절차는 별도의 규정에 따릅니다.

③ 회사는, 제2항에 의하여 탈퇴 처리된 회원이 다시 이용 신청을 하는 경우, 그에 대한 승낙을 거절하거나 일정 기간 그 승낙을 보류할 수 있습니다.

제 21 조 (면책)
① 회사는 전시, 사변 등 국가비상사태, 천재지변, 기간통신사업자의 서비스 제공 중단, 전력공급 중단, 해커의 침입, 컴퓨터 바이러스 기타 이와 유사한 사정으로 인한 회사 시스템의 작동불능 기타 회사의 귀책 사유 없이 회사가 서비스를 제공할 수 없는 경우 회사는 그로 인한 책임을 면합니다.

② 회사는 이용고객이 회사의 서비스로부터 기대하는 이익을 얻지 못하거나 제공된 자료에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.

③ 회사는 회원이 게시, 전송한 정보 또는 자료의 내용과 관련하여서는 책임을 부담하지 않습니다.

④ 회사는 회원 상호간 또는 회원과 제3자 상호간에 서비스를 매개함으로 그들 사이에 발생한 분쟁에 관여할 의무가 없으며, 이로 인한 어떠한 손해도 배상할 책임이 없습니다.

제 22 조 (분쟁의 해결)
① 회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.

② 제1항의 규정에도 불구하고 회사와 회원 사이에 소송이 제기될 경우, 소송은 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다
                        </div>
                        <Form.Check 
                            type="checkbox"
                            id="option-1"
                            label="동의합니다(필수)"
                            onChange={(e) => handleSingleCheck(e.target.checked, 'option-1')}
                            checked={checkItems.includes('option-1') ? true : false}
                        />
                        | 개인정보 수집 및 활용동의
                        <div className="msg">
                        1. 수집목적 : 회원가입, 상담, 서비스 신청 등

2. 수집하는 개인정보 항목
- 필수항목 : 성명, 아이디, 비밀번호, 휴대폰번호, 이메일
- 선택항목 : 없음

3. 보유기간 : 회원 탈퇴시

4. 개인정보주체자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 동의를 거부할 경우 원활한 서비스 이용이 불가함을 알려드립니다.
동의합니다 (필수)
                        </div>
                        <Form.Check 
                            type="checkbox"
                            id="option-2"
                            label="동의합니다(필수)"
                            onChange={(e) => handleSingleCheck(e.target.checked, 'option-2')}
                            checked={checkItems.includes('option-2') ? true : false}
                        />
                        | 마케팅 활용목적 동의
                        <div className="msg">
                        1. 수집목적 : 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 당첨 시 안내 등을 목적으로 개인정보를 처리합니다.

2. 마케팅 및 광고에의 활용
- 필수항목 : 성명, 이메일, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보
- 선택항목 : 휴대폰번호

3. 보유기간 : 회원 탈퇴 시 까지 보유

4. 마케팅에 활용하는 목적 범위 내에서 개인정보를 이용하며, 동 범위를 초과하여 개인정보를 이용하거나 제 3 자에게 제공, 공개하지 않습니다.

5. 개인정보주체자는 마케팅 활용 목적에 대한 동의를 거부할 권리가 있습니다. 동의를 거부할 경우에도 서비스 이용에는 영향을 미치지 않음을 알려드립니다.
                        </div>
                        <Form.Check 
                            type="checkbox"
                            id="option-3"
                            label="동의합니다(선택)"
                            onChange={(e) => handleSingleCheck(e.target.checked, 'option-3')}
                            checked={checkItems.includes('option-3') ? true : false}
                        />
                        <hr />

                        <div className="Signup1">
                        <Form.Check 
                            type="checkbox"
                            id="option-all"
                            label="위 약관에 모두 동의합니다."
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={checkItems.length === 3 ? true : false}
                        />
                        { checkItems.includes('option-1') && checkItems.includes('option-2') ?
                        <>
                        <Link to='/signup2'><button className="btn btn-warning">다음</button></Link> 
                        </>
                        :
                        <>
                        <button className="btn btn-warning" onClick={() => alert('필수 약관에 동의해주시길 바랍니다.')}>다음</button>
                        </>
                        }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignupStep1;