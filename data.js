// data.js - Database for E-Book Content, Compounds, Polymers, and Quizzes

const ebookData = {
  unit12: {
    title: "หน่วยที่ 12: สารประกอบอินทรีย์",
    theme: "purple",
    chapters: [
      {
        id: "u12-ch1",
        title: "1. สารประกอบอินทรีย์และการแบ่งประเภท",
        content: `
          <p class="lead">สารประกอบอินทรีย์ (Organic Compounds) คือสารประกอบเคมีที่มีธาตุคาร์บอน (C) เป็นองค์ประกอบหลัก โดยเกือบทั้งหมดจะมีธาตุไฮโดรเจน (H) ร่วมอยู่ด้วย และอาจมีธาตุอื่น ๆ เช่น ออกซิเจน (O), ไนโตรเจน (N), กำมะถัน (S), ฟอสฟอรัส (P) หรือแฮโลเจน (F, Cl, Br, I) ร่วมอยู่ด้วยในโมเลกุล</p>
          
          <div class="info-card">
            <h4>💡 ความเป็นมาและข้อยกเว้น</h4>
            <p>ในอดีตเชื่อว่าสารประกอบอินทรีย์ต้องเกิดจากสิ่งมีชีวิตเท่านั้น (Vital Force Theory) จนกระทั่ง <strong>ฟรีดริช เวิลเลอร์ (Friedrich Wöhler)</strong> สามารถสังเคราะห์ <em>ยูเรีย (Urea)</em> ซึ่งเป็นสารอินทรีย์จากสารอนินทรีย์ (แอมโมเนียมไซยาเนต) ได้สำเร็จในห้องปฏิบัติการ</p>
            <p><strong>ข้อยกเว้น:</strong> สารประกอบคาร์บอนบางชนิดไม่จัดเป็นสารอินทรีย์ เช่น คาร์บอนไดออกไซด์ (CO₂), คาร์บอเนต (CO₃²⁻), ไฮโดรเจนคาร์บอเนต (HCO₃⁻), ไซยาไนด์ (CN⁻), คาร์ไบด์ (เช่น CaC₂) และอัญรูปของคาร์บอน (เพชร, แกรไฟต์)</p>
          </div>

          <h3>การจำแนกประเภทตามหมู่ฟังก์ชัน (Functional Groups)</h3>
          <p>หมู่ฟังก์ชันคือกลุ่มของอะตอมในโมเลกุลที่ทำหน้าที่กำหนดสมบัติทางเคมีและกายภาพเฉพาะตัวของสารประกอบอินทรีย์นั้น ๆ โดยแบ่งออกเป็นประเภทหลัก ๆ ดังนี้:</p>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>ประเภทของสาร</th>
                  <th>หมู่ฟังก์ชัน</th>
                  <th>สูตรทั่วไป</th>
                  <th>ตัวอย่างสาร</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>แอลเคน (Alkane)</strong></td>
                  <td>พันธะเดี่ยว (C-C)</td>
                  <td>C<sub>n</sub>H<sub>2n+2</sub></td>
                  <td>มีเทน (Methane), โพรเพน (Propane)</td>
                </tr>
                <tr>
                  <td><strong>แอลกีน (Alkene)</strong></td>
                  <td>พันธะคู่ (C=C)</td>
                  <td>C<sub>n</sub>H<sub>2n</sub></td>
                  <td>เอทิลีน (Ethylene)</td>
                </tr>
                <tr>
                  <td><strong>แอลไคน์ (Alkyne)</strong></td>
                  <td>พันธะสาม (C≡C)</td>
                  <td>C<sub>n</sub>H<sub>2n-2</sub></td>
                  <td>อะเซทิลีน (Acetylene)</td>
                </tr>
                <tr>
                  <td><strong>แอลกอฮอล์ (Alcohol)</strong></td>
                  <td>ไฮดรอกซิล (-OH)</td>
                  <td>R-OH</td>
                  <td>เอทานอล (Ethanol), เมทานอล (Methanol)</td>
                </tr>
                <tr>
                  <td><strong>แอลดีไฮด์ (Aldehyde)</strong></td>
                  <td>คาร์บอกซาลดีไฮด์ (-CHO)</td>
                  <td>R-CHO</td>
                  <td>ฟอร์มาลดีไฮด์ (Formaldehyde)</td>
                </tr>
                <tr>
                  <td><strong>คีโตน (Ketone)</strong></td>
                  <td>คาร์บอนิล (-C=O)</td>
                  <td>R-CO-R'</td>
                  <td>แอซีโทน (Acetone)</td>
                </tr>
                <tr>
                  <td><strong>กรดคาร์บอกซิลิก (Carboxylic Acid)</strong></td>
                  <td>คาร์บอกซิล (-COOH)</td>
                  <td>R-COOH</td>
                  <td>กรดแอซีติก (Acetic acid)</td>
                </tr>
                <tr>
                  <td><strong>เอสเทอร์ (Ester)</strong></td>
                  <td>แอลคอกซีคาร์บอนิล (-COOR)</td>
                  <td>R-COOR'</td>
                  <td>เอทิลแอซีเตต (Ethyl acetate)</td>
                </tr>
                <tr>
                  <td><strong>เอมีน (Amine)</strong></td>
                  <td>อะมิโน (-NH<sub>2</sub>)</td>
                  <td>R-NH<sub>2</sub></td>
                  <td>เมทิลเอมีน (Methylamine)</td>
                </tr>
                <tr>
                  <td><strong>เอไมด์ (Amide)</strong></td>
                  <td>เอไมด์ (-CONH<sub>2</sub>)</td>
                  <td>R-CONH<sub>2</sub></td>
                  <td>ยูเรีย (Urea), อะเซทามิโดเฟน (พาราเซตามอล)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "u12-ch2",
        title: "2. ประโยชน์ อันตราย และข้อควรระวัง",
        content: `
          <p class="lead">สารประกอบอินทรีย์มีความเกี่ยวข้องกับชีวิตประจำวันอย่างหลีกเลี่ยงไม่ได้ ทั้งในฐานะอาหาร ยารักษาโรค เชื้อเพลิง เครื่องนุ่งห่ม และสารเคมีในอุตสาหกรรม อย่างไรก็ตาม สารอินทรีย์หลายชนิดมีพิษและติดไฟง่าย จึงต้องศึกษาข้อมูลการใช้งานอย่างปลอดภัย</p>
          
          <div class="grid grid-2">
            <div class="card bg-success-light">
              <h4 class="text-success">🌟 ประโยชน์ของสารประกอบอินทรีย์</h4>
              <ul>
                <li><strong>ด้านพลังงาน:</strong> ปิโตรเลียม แก๊สธรรมชาติ แอลพีจี (LPG) และน้ำมันเชื้อเพลิงต่าง ๆ</li>
                <li><strong>ด้านการแพทย์และยา:</strong> ยารักษาโรค ยาปฏิชีวนะ รวมถึงสารออกฤทธิ์ทางชีวภาพต่าง ๆ</li>
                <li><strong>ด้านอุตสาหกรรม:</strong> ตัวทำละลาย (เช่น แอซีโทน เอทิลแอซีเตต) วัตถุดิบในการผลิตพลาสติก ยาง สี และเครื่องสำอาง</li>
                <li><strong>ด้านการเกษตร:</strong> สารกำจัดศัตรูพืช ปุ๋ยยูเรีย และฮอร์โมนพืช</li>
              </ul>
            </div>
            
            <div class="card bg-danger-light">
              <h4 class="text-danger">⚠️ อันตรายของสารประกอบอินทรีย์</h4>
              <ul>
                <li><strong>การติดไฟและการระเบิด:</strong> สารอินทรีย์ส่วนใหญ่เป็นสารไวไฟสูง มีจุดวาบไฟต่ำ</li>
                <li><strong>ความเป็นพิษต่อร่างกาย:</strong>
                  <ul>
                    <li><em>พิษเฉียบพลัน:</em> ระคายเคืองตา ผิวหนัง ระบบหายใจ กดประสาทส่วนกลาง ทำให้หมดสติ</li>
                    <li><em>พิษเรื้อรัง:</em> สารระเหยบางชนิดเป็นสารก่อมะเร็ง (Carcinogen) เช่น เบนซีน ทำลายตับและไต</li>
                  </ul>
                </li>
                <li><strong>การสะสมในสิ่งแวดล้อม:</strong> สารกลุ่มแฮโลคาร์บอน (เช่น CFCs, DDT) สลายตัวยากและทำลายชั้นโอโซน</li>
              </ul>
            </div>
          </div>

          <h3 style="margin-top: 2rem;">🛡️ ข้อควรระวังและการจัดการสารเคมีอินทรีย์อย่างปลอดภัย</h3>
          <ol>
            <li><strong>การเก็บรักษา:</strong> ควรเก็บในภาชนะปิดสนิท ในบริเวณที่มีการระบายอากาศที่ดี ห่างจากแหล่งความร้อน เปลวไฟ และสารออกซิไดซ์ที่รุนแรง</li>
            <li><strong>การใช้อุปกรณ์ป้องกันส่วนบุคคล (PPE):</strong> ควรสวมแว่นตานิรภัย เสื้อกาวน์ ถุงมือทนสารเคมี และหน้ากากกรองไอสารเคมีเมื่อต้องปฏิบัติงานกับสารระเหยง่าย</li>
            <li><strong>ป้ายสัญลักษณ์เตือนภัย (GHS Pictograms):</strong> ทำความเข้าใจสัญลักษณ์สากล เช่น สัญลักษณ์รูปเปลวไฟ (สารไวไฟ), รูปกะโหลกไขว้ (พิษเฉียบพลัน), รูปสิ่งแวดล้อม (เป็นพิษต่อสิ่งแวดล้อมทางน้ำ)</li>
          </ol>
        `
      },
      {
        id: "u12-ch3",
        title: "3. กิจกรรม 12.10 การสืบค้นข้อมูลสารประกอบอินทรีย์",
        content: `
          <div class="activity-box">
            <div class="activity-header">
              <span class="activity-badge">🧪 กิจกรรม 12.10</span>
              <h4>การสืบค้นข้อมูลของสารประกอบอินทรีย์</h4>
            </div>
            
            <div class="activity-body">
              <h5>🎯 จุดประสงค์ของกิจกรรม</h5>
              <p>สืบค้นและนำเสนอข้อมูลของสารประกอบอินทรีย์เกี่ยวกับประโยชน์ อันตราย และข้อควรระวังในการใช้งาน</p>
              
              <h5>📝 วิธีทำกิจกรรม</h5>
              <ol>
                <li>สืบค้นข้อมูลเกี่ยวกับ<strong>ชื่อสาร สูตรเคมี โครงสร้าง หมู่ฟังก์ชัน</strong> และ<strong>ประโยชน์</strong> รวมทั้ง<strong>อันตรายและข้อควรระวัง</strong>ของการใช้สารประกอบอินทรีย์ที่เลือก โดยอาจแสดงปฏิกิริยาเคมีที่เกี่ยวข้องร่วมด้วย</li>
                <li>บันทึกและรวบรวมข้อมูล จัดระเบียบในรูปแบบที่น่าสนใจ</li>
                <li>นำเสนอข้อมูลการสืบค้นต่อชั้นเรียนหรือสาธารณะ</li>
              </ol>
              
              <div class="action-box">
                <p class="text-center"><strong>ทดลองทำกิจกรรมนี้ด้วยตนเองผ่านเครื่องมือสร้างรายงาน!</strong></p>
                <button class="btn btn-purple btn-block" onclick="app.openReportBuilder('unit12')">
                  📝 เปิดเครื่องมือเขียนรายงานกิจกรรม 12.10
                </button>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  unit13: {
    title: "หน่วยที่ 13: พอลิเมอร์และผลิตภัณฑ์",
    theme: "orange",
    chapters: [
      {
        id: "u13-ch1",
        title: "1. โครงสร้างและคุณสมบัติของพอลิเมอร์",
        content: `
          <p class="lead">พอลิเมอร์ (Polymer) คือสารประกอบที่มีมวลโมเลกุลสูงมาก เกิดจากมอนอเมอร์ (Monomer) ซึ่งเป็นโมเลกุลขนาดเล็กจำนวนหลายพันหรือหลายแสนโมเลกุลเชื่อมต่อกันด้วยพันธะโคเวเลนต์</p>
          
          <h3>โครงสร้างของพอลิเมอร์ 3 ประเภทหลัก</h3>
          <p>ความแตกต่างทางโครงสร้างส่งผลโดยตรงต่อคุณสมบัติทางกายภาพ จุดหลอมเหลว และความเหนียวของพอลิเมอร์:</p>
          
          <div class="polymer-structures-grid">
            <div class="struct-card">
              <div class="struct-visual text-center">
                <svg width="150" height="80" viewBox="0 0 150 80" class="svg-inline">
                  <path d="M10,20 L140,20 M10,40 L140,40 M10,60 L140,60" stroke="#f97316" stroke-width="4" stroke-linecap="round" stroke-dasharray="8,6" fill="none" />
                </svg>
              </div>
              <h4>1. พอลิเมอร์แบบเส้น (Linear Polymer)</h4>
              <p>เกิดจากมอนอเมอร์ต่อกันเป็นสายยาวเรียงชิดติดกันได้ดี แรงยึดเหนี่ยวระหว่างโมเลกุลสูง มีความหนาแน่นสูง จุดหลอมเหลวสูง เหนียวและแข็งแรงมาก</p>
              <small><strong>ตัวอย่าง:</strong> HDPE, PVC, PS, ไนลอน</small>
            </div>
            
            <div class="struct-card">
              <div class="struct-visual text-center">
                <svg width="150" height="80" viewBox="0 0 150 80" class="svg-inline">
                  <path d="M10,15 L140,15 M20,15 L20,30 L50,30 M80,15 L80,25 M10,45 L140,45 M110,45 L110,60 L130,60 M10,70 L140,70" stroke="#f97316" stroke-width="4" stroke-linecap="round" stroke-dasharray="8,6" fill="none" />
                </svg>
              </div>
              <h4>2. พอลิเมอร์แบบกิ่ง (Branched Polymer)</h4>
              <p>มีโซ่กิ่งแยกออกจากโซ่หลัก ทำให้โมเลกุลเรียงชิดติดกันได้ยาก ความหนาแน่นและจุดหลอมเหลวจึงต่ำกว่า ยืดหยุ่นได้ดี มีความเหนียวต่ำ ดึงขาดง่าย</p>
              <small><strong>ตัวอย่าง:</strong> LDPE</small>
            </div>
            
            <div class="struct-card">
              <div class="struct-visual text-center">
                <svg width="150" height="80" viewBox="0 0 150 80" class="svg-inline">
                  <!-- Main lines -->
                  <path d="M10,15 L140,15 M10,40 L140,40 M10,65 L140,65" stroke="#f97316" stroke-width="4" stroke-linecap="round" fill="none" />
                  <!-- Cross links -->
                  <path d="M30,15 L30,40 M70,40 L70,65 M110,15 L110,65" stroke="#ea580c" stroke-width="3" stroke-linecap="round" fill="none" />
                </svg>
              </div>
              <h4>3. พอลิเมอร์แบบร่างแห (Cross-linked Polymer)</h4>
              <p>มีการเชื่อมโยงระหว่างสายพอลิเมอร์เป็นตาข่ายหรือร่างแห มีความแข็งแกร่งมากแต่เปราะ ทนความร้อนสูงมาก ไม่หลอมเหลวเมื่อได้รับความร้อน (เปลี่ยนรูปไม่ได้)</p>
              <small><strong>ตัวอย่าง:</strong> เบกาไลต์, เมลามีน, ยางวัลคาไนซ์</small>
            </div>
          </div>

          <div class="info-card" style="margin-top: 1.5rem;">
            <h4>🔥 เทอร์มอพลาสติก vs เทอร์มอเซต</h4>
            <ul>
              <li><strong>เทอร์มอพลาสติก (Thermoplastic):</strong> พอลิเมอร์แบบเส้นหรือกิ่ง เมื่อได้รับความร้อนจะหลอมเหลว เมื่อเย็นตัวจะแข็งตัว สามารถหลอมกลับมาขึ้นรูปซ้ำเพื่อนำมารีไซเคิลได้</li>
              <li><strong>พลาสติกเทอร์มอเซต (Thermosetting plastic):</strong> พอลิเมอร์แบบร่างแห เมื่อขึ้นรูปด้วยความร้อนและแรงดันแล้วจะไม่สามารถหลอมเหลวใหม่ได้ หากได้รับความร้อนสูงจะไหม้ เกรียม และแตกหัก ไม่สามารถรีไซเคิลด้วยการหลอมได้</li>
            </ul>
          </div>
        `
      },
      {
        id: "u13-ch2",
        title: "2. ผลกระทบและการกำจัดผลิตภัณฑ์พอลิเมอร์",
        content: `
          <p class="lead">พลาสติกเป็นผลิตภัณฑ์พอลิเมอร์ที่ใช้งานแพร่หลายมากที่สุด แต่ความคงทนและย่อยสลายยาก (ใช้เวลาหลายร้อยปี) ทำให้มันกลายเป็นวิกฤตขยะสะสมในสิ่งแวดล้อมทั่วโลก</p>
          
          <div class="grid grid-2">
            <div class="card bg-danger-light">
              <h4 class="text-danger">🚨 ผลกระทบสิ่งแวดล้อมและสุขภาพ</h4>
              <ul>
                <li><strong>ขยะสะสมในมหาสมุทร:</strong> สัตว์ทะเลกินพลาสติกเพราะคิดว่าเป็นอาหาร นำไปสู่การบาดเจ็บและเสียชีวิต</li>
                <li><strong>ไมโครพลาสติก (Microplastics):</strong> พลาสติกที่แตกหักเป็นชิ้นเล็กกว่า 5 มม. สะสมในโซ่อาหาร ปนเปื้อนในสัตว์น้ำ เกลือ และสุดท้ายสะสมในร่างกายมนุษย์</li>
                <li><strong>มลพิษทางอากาศ:</strong> การเผาพลาสติกที่ไม่ถูกวิธีทำให้เกิดแก๊สพิษ เช่น คาร์บอนมอนอกไซด์ ไดออกซิน และแก๊สกรดไฮโดรคลอริก (จาก PVC)</li>
                <li><strong>การชะละลายของสารเคมี:</strong> สารเติมแต่งในพลาสติก เช่น พทาเลต (Phthalates) หรือ BPA สามารถชะล้างออกมารบกวนระบบฮอร์โมนของสิ่งมีชีวิต</li>
              </ul>
            </div>

            <div class="card bg-success-light">
              <h4 class="text-success">🌱 แนวทางแก้ไขและการกำจัด (The 5Rs)</h4>
              <ul>
                <li><strong>Reduce (ลดการใช้):</strong> ปฏิเสธพลาสติกใช้ครั้งเดียวทิ้ง (Single-use plastics) เช่น ถุง หรืองบับเบิ้ล</li>
                <li><strong>Reuse (ใช้ซ้ำ):</strong> นำกล่องหรือภาชนะพลาสติกกลับมาใช้ซ้ำให้เกิดประโยชน์สูงสุด</li>
                <li><strong>Recycle (แปรรูปมาใช้ใหม่):</strong> คัดแยกขยะพลาสติกตามประเภทเพื่อส่งกลับเข้าสู่กระบวนการหลอมขึ้นรูปใหม่</li>
                <li><strong>Refuse (ปฏิเสธ):</strong> ปฏิเสธบรรจุภัณฑ์ที่ทำลายโลก เช่น กล่องโฟม</li>
                <li><strong>Renewable/Rot (ย่อยสลายได้):</strong> หันมาใช้พลาสติกชีวภาพ (Bioplastics) ที่ทำจากแป้งข้าวโพดหรืออ้อย เช่น PLA และ PHA ซึ่งสามารถย่อยสลายได้ตามธรรมชาติ</li>
              </ul>
            </div>
          </div>

          <h3 style="margin-top: 2rem;">♻️ สัญลักษณ์รีไซเคิลพลาสติก 7 ประเภท</h3>
          <p>การรีไซเคิลที่มีประสิทธิภาพต้องอาศัยการแยกประเภทพลาสติกอย่างถูกต้อง ซึ่งระบบสากลได้กำหนดสัญลักษณ์รูปสามเหลี่ยมลูกศรหมุนวนที่มีตัวเลข 1 ถึง 7 กำกับไว้ด้านใน ดังนี้:</p>
          
          <div class="recycle-strip">
            <div class="recycle-item" onclick="app.showPolymerCode(1)">
              <div class="recycle-badge code-1">1</div>
              <span>PETE</span>
            </div>
            <div class="recycle-item" onclick="app.showPolymerCode(2)">
              <div class="recycle-badge code-2">2</div>
              <span>HDPE</span>
            </div>
            <div class="recycle-item" onclick="app.showPolymerCode(3)">
              <div class="recycle-badge code-3">3</div>
              <span>PVC</span>
            </div>
            <div class="recycle-item" onclick="app.showPolymerCode(4)">
              <div class="recycle-badge code-4">4</div>
              <span>LDPE</span>
            </div>
            <div class="recycle-item" onclick="app.showPolymerCode(5)">
              <div class="recycle-badge code-5">5</div>
              <span>PP</span>
            </div>
            <div class="recycle-item" onclick="app.showPolymerCode(6)">
              <div class="recycle-badge code-6">6</div>
              <span>PS</span>
            </div>
            <div class="recycle-item" onclick="app.showPolymerCode(7)">
              <div class="recycle-badge code-7">7</div>
              <span>OTHER</span>
            </div>
          </div>
          <p class="text-center text-muted"><small>* คลิกที่ตัวเลขด้านบนเพื่อเปิดดูรายละเอียดโครงสร้าง มอนอเมอร์ และวิธีการกำจัด</small></p>
        `
      },
      {
        id: "u13-ch3",
        title: "3. กิจกรรม 13.3 สืบค้นการกำจัดและผลกระทบของพอลิเมอร์",
        content: `
          <div class="activity-box">
            <div class="activity-header" style="background-color: var(--theme-orange-dark); color: #fff;">
              <span class="activity-badge" style="background-color: #fff; color: var(--theme-orange-dark);">🧪 กิจกรรม 13.3</span>
              <h4>สืบค้นผลกระทบจากการใช้และการกำจัดผลิตภัณฑ์พอลิเมอร์ และแนวทางแก้ไข</h4>
            </div>
            
            <div class="activity-body">
              <h5>🎯 จุดประสงค์ของกิจกรรม</h5>
              <p>สืบค้นข้อมูล นำเสนอผลกระทบจากการใช้และการกำจัดผลิตภัณฑ์พอลิเมอร์ และนำเสนอแนวทางแก้ไขที่สอดคล้องกับโครงสร้างและคุณสมบัติทางเคมี</p>
              
              <h5>📝 วิธีทำกิจกรรม</h5>
              <ol>
                <li>สืบค้นข้อมูลผลกระทบจากการใช้และการกำจัดผลิตภัณฑ์พอลิเมอร์ และแนวทางแก้ไข โดยให้มีข้อมูลเกี่ยวกับ<strong>โครงสร้างของพอลิเมอร์หรือสารที่เกี่ยวข้อง</strong> ประกอบด้วย</li>
                <li>นำเสนอข้อมูลในรูปแบบที่เหมาะสม เช่น รายงาน แผ่นพับ หรืออินโฟกราฟิก</li>
                <li>ร่วมอภิปรายเพื่อแลกเปลี่ยนความรู้และหาแนวทางแก้ไขร่วมกันในห้องเรียน</li>
              </ol>
              
              <div class="action-box">
                <p class="text-center"><strong>ทดลองทำกิจกรรมนี้ด้วยตนเองผ่านเครื่องมือสร้างรายงาน!</strong></p>
                <button class="btn btn-orange btn-block" onclick="app.openReportBuilder('unit13')">
                  📝 เปิดเครื่องมือเขียนรายงานกิจกรรม 13.3
                </button>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
};

const organicCompounds = [
  {
    id: "ethanol",
    nameTh: "เอทานอล (เอทิลแอลกอฮอล์)",
    nameEn: "Ethanol",
    formula: "C₂H₅OH",
    group: "Alcohol (แอลกอฮอล์)",
    functionalGroup: "Hydroxyl (-OH)",
    structureSvg: `
      <svg width="200" height="120" viewBox="0 0 200 120">
        <!-- Main skeleton: CH3-CH2-OH -->
        <circle cx="50" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="50" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        <text x="50" y="44" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        <text x="50" y="84" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        <text x="32" y="64" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        
        <line x1="50" y1="52" x2="50" y2="44" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="50" y1="68" x2="50" y2="76" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="42" y1="60" x2="35" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="58" y1="60" x2="92" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        
        <circle cx="100" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="100" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        <text x="100" y="44" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        <text x="100" y="84" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        
        <line x1="100" y1="52" x2="100" y2="44" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="100" y1="68" x2="100" y2="76" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="108" y1="60" x2="142" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        
        <circle cx="150" cy="60" r="8" fill="var(--color-oxygen)" />
        <text x="150" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="158" y1="60" x2="175" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <text x="183" y="64" font-family="Prompt" font-size="12" fill="var(--text-color)" text-anchor="middle">H</text>
      </svg>
    `,
    uses: "ใช้เป็นตัวทำละลายในอุตสาหกรรม, ส่วนผสมในน้ำยาฆ่าเชื้อ (เจลแอลกอฮอล์ 70-75% v/v), เชื้อเพลิงสำหรับรถยนต์ (แก๊สโซฮอล์), และเครื่องดื่มแอลกอฮอล์",
    hazards: "เป็นสารไวไฟสูง (ติดไฟง่าย), ไอระเหยทำให้เกิดการระคายเคืองตาและระบบทางเดินหายใจ, หากบริโภคมากเกินไปจะกดระบบประสาทส่วนกลาง ทำให้มึนเมา ขาดสติ และเกิดพิษต่อตับหากสะสมเรื้อรัง",
    precautions: "เก็บให้ห่างจากความร้อน ประกายไฟ และเปลวไฟ ปิดภาชนะให้สนิทหลังใช้งาน หลีกเลี่ยงการสูดดมไอระเหยเป็นเวลานาน",
    reaction: "ปฏิกิริยาการเผาไหม้สมบูรณ์:<br><code>C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O + พลังงาน</code><br>ปฏิกิริยาเอสเทอริฟิเคชันร่วมกับกรดแอซีติก:<br><code>C₂H₅OH + CH₃COOH ⇌ CH₃COOC₂H₅ + H₂O</code>"
  },
  {
    id: "acetic_acid",
    nameTh: "กรดแอซีติก (กรดน้ำส้ม)",
    nameEn: "Acetic acid",
    formula: "CH₃COOH",
    group: "Carboxylic acid (กรดคาร์บอกซิลิก)",
    functionalGroup: "Carboxyl (-COOH)",
    structureSvg: `
      <svg width="200" height="120" viewBox="0 0 200 120">
        <circle cx="50" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="50" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        <text x="50" y="38" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        <text x="50" y="86" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        <text x="30" y="64" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H</text>
        
        <line x1="50" y1="52" x2="50" y2="40" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="50" y1="68" x2="50" y2="80" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="42" y1="60" x2="34" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="58" y1="60" x2="92" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        
        <circle cx="100" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="100" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        
        <line x1="97" y1="52" x2="97" y2="34" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="103" y1="52" x2="103" y2="34" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="100" cy="26" r="8" fill="var(--color-oxygen)" />
        <text x="100" y="30" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="108" y1="60" x2="142" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="150" cy="60" r="8" fill="var(--color-oxygen)" />
        <text x="150" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="158" y1="60" x2="175" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <text x="183" y="64" font-family="Prompt" font-size="12" fill="var(--text-color)" text-anchor="middle">H</text>
      </svg>
    `,
    uses: "ใช้ผลิตน้ำส้มสายชู (ความเข้มข้น 4-8%), ใช้เป็นสารตั้งต้นในการสังเคราะห์พอลิเมอร์ (เช่น Polyvinyl acetate), ตัวทำละลาย, และสารปรับค่าความเป็นกรด-ด่างในอาหารและยา",
    hazards: "กรดแอซีติกเข้มข้นสูง (Glacial acetic acid) มีฤทธิ์กัดกร่อนรุนแรง (Corrosive) สามารถทำลายผิวหนังและเนื้อเยื่อบุตา ไอระเหยมีกลิ่นฉุนรุนแรงและกัดกร่อนระบบหายใจ",
    precautions: "สวมถุงมือป้องกัน สวมแว่นตานิรภัย และเสื้อคลุมปฏิบัติการเสมอเมื่อใช้งานชนิดเข้มข้น เก็บในตู้นิรภัยสำหรับกรดโดยเฉพาะ",
    reaction: "ปฏิกิริยากับเบส (สะเทินกรด-เบส):<br><code>CH₃COOH + NaOH → CH₃COONa + H₂O</code><br>ปฏิกิริยากับโซเดียมไฮโดรเจนคาร์บอเนต:<br><code>CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂ (เกิดฟองฟู่)</code>"
  },
  {
    id: "acetone",
    nameTh: "แอซีโทน (โพรพาโนน)",
    nameEn: "Acetone",
    formula: "CH₃COCH₃",
    group: "Ketone (คีโตน)",
    functionalGroup: "Carbonyl (-CO-)",
    structureSvg: `
      <svg width="200" height="120" viewBox="0 0 200 120">
        <circle cx="50" cy="80" r="8" fill="var(--color-carbon)" />
        <text x="50" y="84" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        <text x="32" y="84" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H₃</text>
        
        <line x1="58" y1="76" x2="92" y2="54" stroke="var(--color-bond)" stroke-width="2" />
        
        <circle cx="100" cy="50" r="8" fill="var(--color-carbon)" />
        <text x="100" y="54" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        
        <line x1="97" y1="42" x2="97" y2="18" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="103" y1="42" x2="103" y2="18" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="100" cy="10" r="8" fill="var(--color-oxygen)" />
        <text x="100" y="14" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="108" y1="54" x2="142" y2="76" stroke="var(--color-bond)" stroke-width="2" />
        
        <circle cx="150" cy="80" r="8" fill="var(--color-carbon)" />
        <text x="150" y="84" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        <text x="168" y="84" font-family="Prompt" font-size="11" fill="var(--text-color)" text-anchor="middle">H₃</text>
      </svg>
    `,
    uses: "ใช้เป็นตัวทำละลายสำหรับล้างสีเล็บ ล้างเรซิ่น ล้างคราบกาว แล็คเกอร์ และสีสเปรย์ รวมถึงเป็นวัตถุดิบในการผลิตพลาสติกและแก้วอะคริลิก (PMMA)",
    hazards: "เป็นของเหลวและไอระเหยที่ไวไฟสูงมาก ไอระเหยหนาแน่นกว่าอากาศสามารถเคลื่อนตัวไปหาแหล่งจุดติดไฟได้ง่าย หากสูดดมจะทำให้เกิดอาการมึนงง ปวดศีรษะ และระคายเคืองดวงตาอย่างรุนแรง",
    precautions: "ห้ามใช้หรือจัดเก็บใกล้แหล่งความร้อน ประกายไฟ หรือไฟฟ้าสถิต ห้ามสูดดมโดยตรง ให้เปิดพัดลมระบายอากาศหรือใช้ใต้ฮูดดูดควัน",
    reaction: "ปฏิกิริยาการเผาไหม้สมบูรณ์:<br><code>CH₃COCH₃ + 4O₂ → 3CO₂ + 3H₂O + พลังงาน</code>"
  },
  {
    id: "ethyl_acetate",
    nameTh: "เอทิลแอซีเตต",
    nameEn: "Ethyl acetate",
    formula: "CH₃COOC₂H₅",
    group: "Ester (เอสเทอร์)",
    functionalGroup: "Alkoxycarbonyl (-COOR)",
    structureSvg: `
      <svg width="220" height="120" viewBox="0 0 220 120">
        <circle cx="30" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="30" y="64" font-family="Prompt" font-weight="bold" font-size="11" fill="#fff" text-anchor="middle">C</text>
        <text x="14" y="64" font-family="Prompt" font-size="10" fill="var(--text-color)" text-anchor="middle">H₃</text>
        
        <line x1="38" y1="60" x2="62" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        
        <circle cx="70" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="70" y="64" font-family="Prompt" font-weight="bold" font-size="11" fill="#fff" text-anchor="middle">C</text>
        
        <line x1="67" y1="52" x2="67" y2="34" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="73" y1="52" x2="73" y2="34" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="70" cy="26" r="8" fill="var(--color-oxygen)" />
        <text x="70" y="30" font-family="Prompt" font-weight="bold" font-size="11" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="78" y1="60" x2="102" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="110" cy="60" r="8" fill="var(--color-oxygen)" />
        <text x="110" y="64" font-family="Prompt" font-weight="bold" font-size="11" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="118" y1="60" x2="142" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="150" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="150" y="64" font-family="Prompt" font-weight="bold" font-size="11" fill="#fff" text-anchor="middle">C</text>
        <text x="150" y="44" font-family="Prompt" font-size="10" fill="var(--text-color)" text-anchor="middle">H₂</text>
        <line x1="150" y1="52" x2="150" y2="46" stroke="var(--color-bond)" stroke-width="2" />
        
        <line x1="158" y1="60" x2="182" y2="60" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="190" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="190" y="64" font-family="Prompt" font-weight="bold" font-size="11" fill="#fff" text-anchor="middle">C</text>
        <text x="206" y="64" font-family="Prompt" font-size="10" fill="var(--text-color)" text-anchor="middle">H₃</text>
      </svg>
    `,
    uses: "ใช้เป็นตัวทำละลายในอุตสาหกรรมแล็กเกอร์ กาว และสารสกัดกลิ่นรสผลไม้ มีกลิ่นคล้ายกาวหรือน้ำผลไม้ ใช้ล้างสีเล็บและทำความสะอาดแผงวงจรอิเล็กทรอนิกส์",
    hazards: "เป็นของเหลวไวไฟ ไอระเหยทำให้เกิดการระคายเคืองตาอย่างรุนแรง และอาจทำให้เกิดการมึนงง มึนศีรษะ ผิวหนังแห้งกร้านจากการสัมผัสซ้ำ ๆ",
    precautions: "หลีกเลี่ยงการสูดดมและสัมผัสโดยตรง สวมหน้ากากกรองสารเคมีและถุงมือที่ทำจากยางสังเคราะห์ เช่น ยางบิวทิล เก็บในที่ร่มห่างจากไฟ",
    reaction: "ปฏิกิริยาไฮโดรไลซิสในสภาวะเบส (Saponification):<br><code>CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH</code>"
  },
  {
    id: "formaldehyde",
    nameTh: "ฟอร์มาลดีไฮด์ (ฟอร์มาลิน)",
    nameEn: "Formaldehyde",
    formula: "HCHO",
    group: "Aldehyde (แอลดีไฮด์)",
    functionalGroup: "Carboxaldehyde (-CHO)",
    structureSvg: `
      <svg width="200" height="120" viewBox="0 0 200 120">
        <circle cx="100" cy="60" r="8" fill="var(--color-carbon)" />
        <text x="100" y="64" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">C</text>
        
        <line x1="97" y1="52" x2="97" y2="28" stroke="var(--color-bond)" stroke-width="2" />
        <line x1="103" y1="52" x2="103" y2="28" stroke="var(--color-bond)" stroke-width="2" />
        <circle cx="100" cy="20" r="8" fill="var(--color-oxygen)" />
        <text x="100" y="24" font-family="Prompt" font-weight="bold" font-size="12" fill="#fff" text-anchor="middle">O</text>
        
        <line x1="92" y1="66" x2="68" y2="84" stroke="var(--color-bond)" stroke-width="2" />
        <text x="60" y="92" font-family="Prompt" font-size="12" fill="var(--text-color)" text-anchor="middle">H</text>
        
        <line x1="108" y1="66" x2="132" y2="84" stroke="var(--color-bond)" stroke-width="2" />
        <text x="140" y="92" font-family="Prompt" font-size="12" fill="var(--text-color)" text-anchor="middle">H</text>
      </svg>
    `,
    uses: "สารละลายในน้ำเรียกว่า ฟอร์มาลิน (Formalin) ใช้รักษาสภาพเนื้อเยื่อชีวภาพเพื่อป้องกันการเน่าเปื่อย สังเคราะห์พลาสติกฟีนอล-ฟอร์มาลดีไฮด์ (เบกาไลต์) และใช้ในน้ำยาทำความสะอาด/ฆ่าเชื้อโรค",
    hazards: "เป็นสารที่มีพิษสูงและจัดเป็นสารก่อมะเร็งในมนุษย์ (Carcinogen) ไอกรดแสบตาและโพรงจมูกอย่างรุนแรง การสัมผัสผิวหนังทำให้เกิดผื่นแพ้และไหม้เกรียมเฉียบพลัน",
    precautions: "ห้ามมิให้สัมผัสหรือสูดดมเด็ดขาด ปฏิบัติงานในตู้ดูดควัน สวมถุงมือหนาทนสารเคมีและแว่นครอบตาป้องกันสารเคมีกระเด็น",
    reaction: "ปฏิกิริยาออกซิเดชันไปเป็นกรดฟอร์มิก:<br><code>HCHO + [O] → HCOOH</code>"
  },
  {
    id: "benzene",
    nameTh: "เบนซีน",
    nameEn: "Benzene",
    formula: "C₆H₆",
    group: "Aromatic hydrocarbon (อะโรมาติกไฮโดรคาร์บอน)",
    functionalGroup: "Benzene ring (วงเบนซีน)",
    structureSvg: `
      <svg width="200" height="140" viewBox="0 0 200 140">
        <polygon points="100,20 143,45 143,95 100,120 57,95 57,45" stroke="var(--color-bond)" stroke-width="3" fill="none" />
        <circle cx="100" cy="70" r="28" stroke="var(--color-bond)" stroke-dasharray="6,4" stroke-width="2.5" fill="none" />
        <text x="100" y="16" font-family="Prompt" font-size="9" fill="var(--text-color)" text-anchor="middle">CH</text>
        <text x="156" y="47" font-family="Prompt" font-size="9" fill="var(--text-color)" text-anchor="middle">CH</text>
        <text x="156" y="99" font-family="Prompt" font-size="9" fill="var(--text-color)" text-anchor="middle">CH</text>
        <text x="100" y="132" font-family="Prompt" font-size="9" fill="var(--text-color)" text-anchor="middle">CH</text>
        <text x="44" y="99" font-family="Prompt" font-size="9" fill="var(--text-color)" text-anchor="middle">CH</text>
        <text x="44" y="47" font-family="Prompt" font-size="9" fill="var(--text-color)" text-anchor="middle">CH</text>
      </svg>
    `,
    uses: "ใช้เป็นสารตั้งต้นหลักในการผลิตสารเคมีต่าง ๆ เช่น สไตรีนมอนอเมอร์ (ทำโฟม PS), ฟีนอล, ไนลอน, สีย้อม, ยางสังเคราะห์ และเป็นส่วนผสมในน้ำมันเบนซินเพื่อเพิ่มค่าออกเทน",
    hazards: "เป็นของเหลวไวไฟสูงมาก และเป็นสารก่อมะเร็งกลุ่มที่ 1 (ก่อมะเร็งในมนุษย์ชัดเจน) ทำลายไขกระดูก ทำให้เป็นโรคโลหิตจางและมะเร็งเม็ดเลือดขาว (Leukemia)",
    precautions: "เก็บในภาชนะป้องกันการระเบิด ป้องกันไอระเหยรั่วไหล หลีกเลี่ยงการสูดดมและสัมผัสอย่างเคร่งครัด สวมใส่อุปกรณ์ป้องกันระดับสูง",
    reaction: "ปฏิกิริยาแทนที่ด้วยแฮโลเจน (Substitution Reaction):<br><code>C₆H₆ + Cl₂ --(FeCl₃)--> C₆H₅Cl + HCl</code>"
  }
];

const polymerRecycling = [
  {
    code: 1,
    abbreviation: "PETE / PET",
    nameTh: "พอลิเอทิลีนเทเรฟทาเลต",
    nameEn: "Polyethylene Terephthalate",
    properties: "พลาสติกใส มีความเหนียวสูง ป้องกันการผ่านของแก๊สได้ดี ทนต่อแรงกระแทก ไม่เปราะแตกง่าย",
    commonUses: "ขวดน้ำเปล่า, ขวดน้ำอัดลม, ขวดน้ำมันพืช, กล่องใส่อาหารบางประเภท",
    environmentalImpact: "ใช้เวลาย่อยสลายประมาณ 450 ปี หากทิ้งในทะเลจะแตกตัวเป็นไมโครพลาสติกส่งผลร้ายแรงต่อสัตว์น้ำ เป็นขยะพลาสติกที่มีสัดส่วนสูงในสิ่งแวดล้อม",
    recyclingMethod: "สามารถนำกลับมารีไซเคิล 100% โดยนำมาบด ล้าง และหลอมใหม่เพื่อผลิตเป็น เส้นใยโพลีเอสเตอร์สำหรับทำเสื้อกันหนาว, พรม, ใยสังเคราะห์ในหมอน, หรือขวดน้ำขวดใหม่ (rPET)"
  },
  {
    code: 2,
    abbreviation: "HDPE",
    nameTh: "พอลิเอทิลีนความหนาแน่นสูง",
    nameEn: "High-Density Polyethylene",
    properties: "พลาสติกสีทึบหรือโปร่งแสง แข็งแรง ค่อนข้างเหนียว ไม่แตกหักง่าย ทนทานต่อสารเคมีและกรด-ด่างได้ดีมาก ป้องกันความชื้นได้ดี",
    commonUses: "ขวดนม, ขวดแชมพู, แกลลอนน้ำยาซักผ้า, ถุงหูหิ้วชนิดหนา, ท่อน้ำดื่ม",
    environmentalImpact: "สลายตัวได้ยากมาก (ราว 450 ปี) การทิ้งไม่ถูกวิธีทำให้อุดตันทางระบายน้ำและเป็นอันตรายต่อสิ่งมีชีวิต",
    recyclingMethod: "หลอมใหม่ทำเป็นขวดบรรจุภัณฑ์ที่ไม่ใช่อาหาร (เช่น ขวดน้ำยาซักผ้า), ไม้เทียมพลาสติก (Plastic Lumber), ถังขยะ, และพาเลทขนส่งสินค้า"
  },
  {
    code: 3,
    abbreviation: "PVC",
    nameTh: "พอลิไวนิลคลอไรด์",
    nameEn: "Polyvinyl Chloride",
    properties: "มีความแข็งแรงมาก แข็งเกร็ง ทนสารเคมีและน้ำได้ดีมาก สามารถเติมสารเพิ่มความยืดหยุ่น (Plasticizers) เพื่อทำให้เป็นพลาสติกอ่อนได้",
    commonUses: "ท่อน้ำประปา (สีฟ้า), สายยาง, ม่านห้องน้ำ, หนังเทียม, แผ่นเสียง, ของเล่นเด็กชนิดนิ่ม",
    environmentalImpact: "มีพิษสูงสุดในการผลิตและการกำจัด: การเผาทำลายจะปล่อยแก๊สไฮโดรคลอริก (HCl) ที่มีฤทธิ์เป็นกรดแก่ และสารไดออกซิน (Dioxins) ซึ่งเป็นสารก่อมะเร็งร้ายแรง การรีไซเคิลทำได้ยากเนื่องจากมีสารเติมแต่งจำนวนมาก",
    recyclingMethod: "นำกลับมาบดหลอมใหม่เพื่อผลิตเป็น ท่อร้อยสายไฟ, กรวยจราจร, แผ่นยางปูพื้น, และแกนพลาสติก"
  },
  {
    code: 4,
    abbreviation: "LDPE",
    nameTh: "พอลิเอทิลีนความหนาแน่นต่ำ",
    nameEn: "Low-Density Polyethylene",
    properties: "พลาสติกโปร่งแสง นิ่ม ยืดหยุ่นได้ดีมาก ทนต่อความเย็นและการฉีกขาด แต่ทนความร้อนได้ไม่มาก",
    commonUses: "ถุงเย็นใส่อาหาร, ฟิล์มยืดถนอมอาหาร (Cling Wrap), ถุงขยะ, ขวดพลาสติกชนิดบีบได้",
    environmentalImpact: "มักถูกทิ้งเป็นขยะชิ้นเล็ก น้ำหนักเบา ปลิวกระจัดกระจายได้ง่าย อุดตันตามทางระบายน้ำและตกค้างในสิ่งแวดล้อมได้นาน (450 ปี)",
    recyclingMethod: "หลอมใหม่ทำเป็น ถุงขยะดำ, ถุงหูหิ้วสำหรับช้อปปิ้ง, กระเบื้องปูพื้นพลาสติก, และซองจดหมายกันกระแทก"
  },
  {
    code: 5,
    abbreviation: "PP",
    nameTh: "พอลิโพรพิลีน",
    nameEn: "Polypropylene",
    properties: "มีความแข็งแรงทนทาน น้ำหนักเบา จุดหลอมเหลวสูง (ทนความร้อนได้เกิน 100°C) สามารถนำเข้าไมโครเวฟได้ (บางเกรด)",
    commonUses: "กล่องใส่อาหารสำหรับไมโครเวฟ, ฝาขวดน้ำ, หลอดดูดน้ำ, ตะกร้าพลาสติก, กระบอกน้ำร้อน",
    environmentalImpact: "ใช้เวลาย่อยสลายนานประมาณ 20-30 ปี (สั้นกว่าพลาสติกชนิดอื่นแต่ก็ยังเป็นปัญหาใหญ่หากไม่คัดแยก) การทิ้งทำให้ขยะทับถมในหลุมฝังกลบ",
    recyclingMethod: "นำกลับมารีไซเคิลเป็นชิ้นส่วนรถยนต์ (เช่น กันชน ไฟท้าย), ไม้กวาดพลาสติก, กล่องแบตเตอรี่, และภาชนะอุตสาหกรรม"
  },
  {
    code: 6,
    abbreviation: "PS",
    nameTh: "พอลิสไตรีน",
    nameEn: "Polystyrene",
    properties: "พลาสติกแข็ง โปร่งใส เปราะง่าย แตกหักได้ดี หากเป่าแก๊สจะกลายเป็นโฟม (Expanded PS) ที่น้ำหนักเบาและกันความร้อนได้ดีมาก",
    commonUses: "ช้อนส้อมพลาสติกใช้แล้วทิ้ง, ตลับเทป/ซีดี, กล่องโฟมใส่อาหาร, ถ้วยโยเกิร์ตบางยี่ห้อ",
    environmentalImpact: "เป็นอันตรายอย่างยิ่งต่อสุขภาพและสิ่งแวดล้อม: โฟม PS แตกตัวเป็นชิ้นเล็ก ๆ ได้ง่ายมาก ปลิวไปทั่วและดูดซับสารพิษในสิ่งแวดล้อมได้ดี เมื่อใส่อาหารร้อนหรือมัน สารสไตรีน (Styrene Monomer) ซึ่งเป็นสารก่อมะเร็งและทำลายระบบประสาทสามารถชะล้างปนเปื้อนในอาหารได้",
    recyclingMethod: "นำไปแปรรูปใหม่เป็น ไม้บรรทัด, ไม้แขวนเสื้อ, กรอบรูปพลาสติก, กล่องใส่ซีดี และฉนวนกันความร้อน"
  },
  {
    code: 7,
    abbreviation: "OTHER",
    nameTh: "พลาสติกอื่น ๆ หรือพอลิเมอร์ผสม",
    nameEn: "Other plastics / Composite Polymers",
    properties: "พลาสติกประเภทอื่น ๆ นอกเหนือจาก 6 ชนิดแรก หรือพลาสติกหลายชนิดผสมกัน เช่น Polycarbonate (PC), Nylon, อะคริลิก, หรือพลาสติกชีวภาพ (PLA, PHA)",
    commonUses: "ขวดนมเด็ก (ที่ทนความร้อนสูง), กระเป๋าเดินทาง, เลนส์แว่นตา, บรรจุภัณฑ์ใส่อาหารเคลือบฟอยล์, ชิ้นส่วนอิเล็กทรอนิกส์",
    environmentalImpact: "มีความหลากหลายสูงมาก หากเป็นพวก Polycarbonate อาจปล่อยสาร Bisphenol A (BPA) ซึ่งรบกวนฮอร์โมนเพศ หากเป็นพลาสติกชีวภาพ (PLA) จะมีข้อดีคือสามารถย่อยสลายได้ทางชีวภาพภายใต้สภาวะควบคุมที่เหมาะสม",
    recyclingMethod: "เนื่องจากเป็นพลาสติกผสม การรีไซเคิลด้วยการหลอมจึงทำได้ยากมาก มักถูกนำไปผ่านกระบวนการแปรรูปพลังงาน (เผาผลิตกระแสไฟฟ้าอย่างปลอดภัย) หรือใช้ทำท่อสังเคราะห์ ไม้เทียมเกรดพิเศษ"
  }
];

const quizzes = {
  unit12: [
    {
      q: "สารประกอบคาร์บอนข้อใดต่อไปนี้ จัดเป็นสารประกอบอินทรีย์?",
      options: [
        "โซเดียมไฮโดรเจนคาร์บอเนต (NaHCO₃)",
        "กรดคาร์บอนิก (H₂CO₃)",
        "ยูเรีย (CO(NH₂)₂)",
        "แก๊สคาร์บอนไดออกไซด์ (CO₂)"
      ],
      correct: 2,
      explain: "ยูเรีย (CO(NH₂)₂) จัดเป็นสารอินทรีย์ เนื่องจากโครงสร้างประกอบด้วยคาร์บอนที่จับกับออกซิเจนและหมู่อะมิโน ซึ่ง ฟรีดริช เวิลเลอร์ สังเคราะห์ได้จากสารอนินทรีย์ ส่วนข้ออื่น ๆ จัดเป็นสารอนินทรีย์เนื่องจากเป็นสารคาร์บอเนต กรดอนินทรีย์ หรือแก๊สออกไซด์ของคาร์บอน"
    },
    {
      q: "ข้อใดจับคู่ประเภทของสารประกอบอินทรีย์กับหมู่ฟังก์ชันไม่ถูกต้อง?",
      options: [
        "แอลกอฮอล์ — หมู่ไฮดรอกซิล (-OH)",
        "เอสเทอร์ — หมู่คาร์บอกซิล (-COOH)",
        "คีโตน — หมู่คาร์บอนิล (-C=O)",
        "เอมีน — หมู่อะมิโน (-NH₂)"
      ],
      correct: 1,
      explain: "เอสเทอร์ (Ester) มีหมู่ฟังก์ชันคือ แอลคอกซีคาร์บอนิล (-COOR) ส่วนหมู่คาร์บอกซิล (-COOH) เป็นหมู่ฟังก์ชันของกรดคาร์บอกซิลิก (Carboxylic Acid)"
    },
    {
      q: "ข้อดีของการใช้ เอทิลแอซีเตต ในโรงงานอุตสาหกรรมคืออะไร และข้อควรระวังสำคัญที่สุดคืออะไร?",
      options: [
        "ใช้เป็นยารักษาโรคหอบหืด / เป็นสารก่อมะเร็งสะสมในกระดูก",
        "ใช้เป็นปุ๋ยบำรุงพืช / มีฤทธิ์กัดกร่อนผิวหนังปานกลาง",
        "ใช้เป็นตัวทำละลายอินทรีย์ / เป็นสารไวไฟสูงและไอระเหยทำให้มึนงงได้",
        "ใช้เพิ่มออกเทนในน้ำมัน / ทำปฏิกิริยากับแสงแล้วปล่อยคลอรีนแก๊ส"
      ],
      correct: 2,
      explain: "เอทิลแอซีเตต (Ethyl acetate) เป็นเอสเทอร์ที่ใช้เป็นตัวทำละลายในอุตสาหกรรมทำความสะอาด ล้างสี และน้ำยาเคลือบ ข้อควรระวังสูงสุดคือเป็นสารไวไฟสูง และการสูดดมไอระเหยสามารถทำให้เกิดการระคายเคืองและมึนงงได้"
    },
    {
      q: "สารประกอบอินทรีย์ชนิดใดที่มีกลิ่นฉุนเฉพาะตัว ใช้ในกระบวนการดองรักษาสภาพศพ หรือสิ่งมีชีวิต และจัดเป็นสารก่อมะเร็งในมนุษย์?",
      options: [
        "ฟอร์มาลดีไฮด์ (Formaldehyde)",
        "เอทานอล (Ethanol)",
        "เบนซีน (Benzene)",
        "กรดแอซีติก (Acetic acid)"
      ],
      correct: 0,
      explain: "ฟอร์มาลดีไฮด์ (Formaldehyde) หรือสารละลายฟอร์มาลิน มีสมบัติตรึงโปรตีนไม่ให้เน่าเสีย จึงใช้ดองรักษาสภาพสิ่งมีชีวิต มีข้อเสียคือกลิ่นฉุน แสบตา และเป็นสารก่อมะเร็งร้ายแรงหากสูดดมสะสม"
    },
    {
      q: "เมื่อต้องการทำปฏิกิริยาสังเคราะห์เอทิลแอซีเตตจากเอทานอลและกรดแอซีติก จะต้องทำอย่างไร และได้ผลิตภัณฑ์อะไรเป็นผลพลอยได้?",
      options: [
        "ต้มสารผสมโดยมีตัวเร่งปฏิกิริยาเป็นเบสแก่ / ได้แก๊สคาร์บอนไดออกไซด์",
        "ให้สารทำปฏิกิริยากันในน้ำเย็นจัด / ได้ของแข็งตกตะกอนเกลือโซเดียม",
        "ต้มทำปฏิกิริยาโดยใช้กรดซัลฟิวริกเข้มข้นเป็นตัวเร่งปฏิกิริยา / ได้น้ำ (H₂O)",
        "เผาผ่านแก๊สออกซิเจนโดยตรง / ได้สารประเภทเอมีน"
      ],
      correct: 2,
      explain: "ปฏิกิริยาเอสเทอริฟิเคชัน (Esterification) ระหว่างแอลกอฮอล์ (เอทานอล) และกรดคาร์บอกซิลิก (กรดแอซีติก) ต้องใช้กรดซัลฟิวริกเข้มข้นเป็นตัวเร่งปฏิกิริยาและความร้อน ผลิตภัณฑ์ที่ได้คือเอสเทอร์ (เอทิลแอซีเตต) และน้ำ"
    }
  ],
  unit13: [
    {
      q: "พอลิเมอร์ชนิดใดที่มีโครงสร้างแบบกิ่ง (Branched Polymer) และส่งผลอย่างไรต่อคุณสมบัติทางกายภาพ?",
      options: [
        "PVC - มีความแข็งแกร่งสูงมากและเหนียว",
        "LDPE - มีความหนาแน่นต่ำ จุดหลอมเหลวต่ำ และยืดหยุ่นสูง",
        "HDPE - มีโครงสร้างเรียงชิดติดกันได้ดี ดึงขาดยาก",
        "เมลามีน - ทนความร้อนสูงมาก ไม่หลอมเหลวซ้ำ"
      ],
      correct: 1,
      explain: "LDPE (Low-Density Polyethylene) เป็นพอลิเมอร์แบบกิ่ง ทำให้โซ่โมเลกุลเรียงชิดกันไม่ได้ ความหนาแน่นต่ำ แรงยึดเหนี่ยวต่ำ ส่งผลให้มีความยืดหยุ่นสูง จุดหลอมเหลวต่ำกว่าพลาสติกแบบเส้นอย่าง HDPE หรือ PVC"
    },
    {
      q: "เพราะเหตุใดพลาสติกประเภท 'เทอร์มอเซต' จึงไม่สามารถนำกลับมาหลอมขึ้นรูปใหม่ (Recycle) ด้วยวิธีทางกายภาพได้?",
      options: [
        "because มีโครงสร้างแบบเส้นที่เหนียวเกินไป ดึงให้ขาดออกจากกันยาก",
        "เพราะเป็นโมเลกุลที่มีน้ำหนักน้อยมาก ละลายในน้ำได้ง่ายเกินไป",
        "เพราะมีแรงเชื่อมโยงระหว่างโซ่หลักเป็นร่างแห (Cross-link) เมื่อได้รับความร้อนสูงจะสลายตัวหรือไหม้เกรียมโดยไม่หลอมเหลว",
        "เพราะทำมาจากวัสดุธรรมชาติทั้งหมด จึงย่อยสลายได้ทันทีที่โดนความร้อน"
      ],
      correct: 2,
      explain: "พลาสติกเทอร์มอเซตมีโครงสร้างแบบร่างแห (Cross-linked) พันธะเชื่อมโยงข้ามเส้นทำหน้าที่ยึดเหนี่ยวอย่างแข็งแรง เมื่อโดนความร้อนโมเลกุลจะไม่สามารถไหลเลื่อนผ่านกันได้เหมือนเทอร์มอพลาสติก หากได้รับความร้อนสูงเกินไปจะสลายตัวทางเคมี (ไหม้/แตกหัก) แทนที่จะหลอมเหลว"
    },
    {
      q: "แก๊สพิษชนิดใดต่อไปนี้ที่มีฤทธิ์กัดกร่อนผิวหนังและทางเดินหายใจรุนแรง ซึ่งเกิดจากการเผาทำลายผลิตภัณฑ์พลาสติกประเภท PVC (รหัสหมายเลข 3)?",
      options: [
        "แก๊สไนโตรเจนไดออกไซด์ (NO₂)",
        "แก๊สคลอรีน (Cl₂) และแก๊สไฮโดรเจนคลอไรด์ (HCl)",
        "แก๊สคาร์บอนไดออกไซด์ (CO₂)",
        "แก๊สแอมโมเนีย (NH₃)"
      ],
      correct: 1,
      explain: "PVC (Polyvinyl chloride) มีธาตุคลอรีน (Cl) เป็นองค์ประกอบในโมเลกุล เมื่อเผาไหม้จะเกิดแก๊สไฮโดรเจนคลอไรด์ (HCl) ซึ่งเป็นกรดแก่ และหากเผาไหม้ไม่สมบูรณ์จะเกิดสารก่อมะเร็งไดออกซินและแก๊สคลอรีนด้วย"
    },
    {
      q: "ขยะขวดน้ำใสที่เรานิยมดื่มกันทั่วไป (ขวดน้ำดื่มบรรจุเสร็จ) จัดอยู่ในประเภทสัญลักษณ์รีไซเคิลหมายเลขใด และใช้ชื่อย่อว่าอะไร?",
      options: [
        "หมายเลข 2 - HDPE",
        "หมายเลข 5 - PP",
        "หมายเลข 1 - PETE / PET",
        "หมายเลข 6 - PS"
      ],
      correct: 2,
      explain: "ขวดน้ำเปล่าใสหรือขวดน้ำอัดลม จัดเป็นพลาสติกหมายเลข 1 ชื่อว่า Polyethylene Terephthalate หรือ PET/PETE ซึ่งมีความใส เหนียว และสามารถนำมารีไซเคิลเป็นเส้นใยทำเสื้อผ้าได้ดี"
    },
    {
      q: "การแก้ไขปัญหาขยะพลาสติกตามแนวทาง 5Rs ข้อใดต่อไปนี้เป็นการแก้ไขปัญหาที่ต้นทางมากที่สุด และมีประสิทธิภาพในการลดปริมาณขยะสูงสุด?",
      options: [
        "Recycle (แปรรูปมาใช้ใหม่) โดยนำขวดเก่าทั้งหมดมาหลอมใหม่",
        "Reuse (ใช้ซ้ำ) โดยเอากล่องพลาสติกกลับมาล้างซ้ำหลายๆ รอบ",
        "Reduce & Refuse (ลดการใช้และปฏิเสธ) หลีกเลี่ยงพลาสติกแบบใช้ครั้งเดียวทิ้ง",
        "Renewable (ใช้พลาสติกชีวภาพ) ที่ผลิตจากอ้อยแทนพลาสติกทั้งหมด"
      ],
      correct: 2,
      explain: "การลดปริมาณขยะที่มีประสิทธิภาพสูงสุดคือการแก้ที่ต้นทาง (Source Reduction) โดยการ Reduce (ลดการใช้งาน) และ Refuse (ปฏิเสธ) การใช้พลาสติกประเภทใช้ครั้งเดียวทิ้ง (Single-use plastics) ซึ่งช่วยไม่ให้ขยะพลาสติกเกิดขึ้นตั้งแต่แรก ต่างจาก Recycle หรือ Reuse ที่ช่วยจัดการหลังเกิดขยะแล้ว"
    }
  ]
};
