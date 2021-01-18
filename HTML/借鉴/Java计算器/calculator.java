package com.shiyanlou.calculator;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.Vector;
import java.math.BigDecimal;
public class Calculator {
    String str1 = "0"; //操作数1，为了程序的安全，初值一定设置，这里我们设置为0
    String str2 = "0"; //操作数2
    String signal = "+"; //运算符
    String result = ""; //运算结果
    //以下k1至k2为状态开关
    int k1 = 1; //开关1用于选择输入方向，将要写入str1或str2
    int k2 = 1; // 开关 2 用于记录符号键的次数；如果 k2>1 说明进行的是 2+3-9+8 这样的多符号运算
    int k3 = 1; // 开关3用于标识 str1 是否可以被清0；等于1时可以，不等于1时不能被清0
    int k4 = 1; // 开关4用于标识 str2 是否可以被清0；等于 1 时可以，不等于1时不能被清0
    int k5 = 1; // 开关5用于控制小数点可否被录入；等于1时可以，不为1时，输入的小数点被丢掉
	JButton store; // store的作用类似于寄存器，用于记录是否连续按下符号键
	@SuppressWarnings("rawtypes")
    Vector vt = new Vector(20, 10);
	JFrame frame = new JFrame("Calculator"); //创建一个JFrame对象并初始化。JFrame可以理解为程序的主窗体；创建一个JTextField对象并初始化。JTextField是用于显示操作和计算结果的文本框。
	JTextField result_TextField = new JTextField(result, 20);// 参数 20 表明可以显示 20 列的文本内容
    JButton clear_Button = new JButton("Clear"); // 清除按钮
    // 数字键0到9
	JButton button0 = new JButton("0");
	JButton button1 = new JButton("1");
	JButton button2 = new JButton("2");
	JButton button3 = new JButton("3");
	JButton button4 = new JButton("4");
	JButton button5 = new JButton("5");
	JButton button6 = new JButton("6");
	JButton button7 = new JButton("7");
	JButton button8 = new JButton("8");
    JButton button9 = new JButton("9");
    // 计算命令按钮，加减乘除以及小数点等
	JButton button_Dian = new JButton(".");
	JButton button_jia = new JButton("+");
	JButton button_jian = new JButton("-");
	JButton button_cheng = new JButton("*");
	JButton button_chu = new JButton("/");
	JButton button_dy = new JButton("="); // 计算按钮
	public Calculator() {
		button0.setMnemonic(KeyEvent.VK_0);
		result_TextField.setHorizontalAlignment(JTextField.RIGHT);
		JPanel pan = new JPanel(); // 创建一个 Jpanel 对象并初始化
        pan.setLayout(new GridLayout(4, 4, 5, 5)); // 设置该容器的布局为四行四列，边距为5像素
        // 将用于计算的按钮添加到容器内
		pan.add(button7);
		pan.add(button8);
		pan.add(button9);
		pan.add(button_chu);
		pan.add(button4);
		pan.add(button5);
		pan.add(button6);
		pan.add(button_cheng);
		pan.add(button1);
		pan.add(button2);
		pan.add(button3);
		pan.add(button_jian);
		pan.add(button0);
		pan.add(button_Dian);
		pan.add(button_dy);
		pan.add(button_jia);
		pan.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5)); // 设置 pan 对象的边距
		JPanel pan2 = new JPanel(); // 按照同样的方式设置第二个JPanel
		pan2.setLayout(new BorderLayout());
		pan2.add(result_TextField, BorderLayout.WEST);
        pan2.add(clear_Button, BorderLayout.EAST);
		frame.setLocation(300, 200); // 设置主窗口出现在屏幕上的位置
		frame.setResizable(false); // 设置窗体不能调大小
		frame.getContentPane().setLayout(new BorderLayout());
		frame.getContentPane().add(pan2, BorderLayout.NORTH);
		frame.getContentPane().add(pan, BorderLayout.CENTER);
		frame.pack();
        frame.setVisible(true);
        // 数字键
		class Listener implements ActionListener {
			@SuppressWarnings("unchecked")
			public void actionPerformed(ActionEvent e) {
                // 获取事件源，并从事件源中获取输入的数据
				String ss = ((JButton) e.getSource()).getText();
				store = (JButton) e.getSource();
				vt.add(store);
				if (k1 == 1) { 
					if (k3 == 1) {
						str1 = "";
						k5 = 1; // 还原开关k5状态
					}
					str1 = str1 + ss;
					k3 = k3 + 1;
					result_TextField.setText(str1); // 显示结果
				} else if (k1 == 2) {
					if (k4 == 1) {
						str2 = "";
						k5 = 1; // 还原开关k5状态
					}
					str2 = str2 + ss;
					k4 = k4 + 1;
					result_TextField.setText(str2);
				}
			}
		}
		// 输入的运算符号的处理
        class Listener_signal implements ActionListener {
            @SuppressWarnings("unchecked")
            public void actionPerformed(ActionEvent e) {
                String ss2 = ((JButton) e.getSource()).getText();
                store = (JButton) e.getSource();
                vt.add(store);

                if (k2 == 1) {
                    // 开关 k1 为 1 时向数 1 写输入值，为 2 时向数2写输入值。
                    k1 = 2;
                    k5 = 1;
                    signal = ss2;
                    k2 = k2 + 1; // 按符号键的次数
                } else {
                    int a = vt.size();
                    JButton c = (JButton) vt.get(a - 2);

                    if (!(c.getText().equals("+"))
                            && !(c.getText().equals("-"))
                            && !(c.getText().equals("*"))
                            && !(c.getText().equals("/")))

                    {
                        cal();
                        str1 = result;
                        // 开关 k1 为 1 时，向数 1 写值，为2时向数2写
                        k1 = 2;
                        k5 = 1;
                        k4 = 1;
                        signal = ss2;
                    }
                k2 = k2 + 1;
                }
            }
        }
        // 清除键的逻辑（Clear）
		class Listener_clear implements ActionListener {
			@SuppressWarnings("unchecked")
			public void actionPerformed(ActionEvent e) {
				store = (JButton) e.getSource();
				vt.add(store);
				k5 = 1;
				k2 = 1;
				k1 = 1;
				k3 = 1;
				k4 = 1;
				str1 = "0";
				str2 = "0";
				signal = "";
				result = "";
				result_TextField.setText(result);
				vt.clear();
			}
        }
        // 等于按键的逻辑，即在输入完成后开始计算
		class Listener_dy implements ActionListener { 
			@SuppressWarnings("unchecked")
			public void actionPerformed(ActionEvent e) {
				store = (JButton) e.getSource();
				vt.add(store);
				cal();
				k1 = 1; // 还原开关k1状态
				k2 = 1; // 还原开关k2状态
				k3 = 1; // 还原开关k3状态
				k4 = 1; // 还原开关k4状态
				str1 = result; // 为 7+5=12 +5=17 这种计算做准备
			}
		}
		// 小数点的处理
        class Listener_xiaos implements ActionListener {
            @SuppressWarnings("unchecked")
            public void actionPerformed(ActionEvent e) {
                store = (JButton) e.getSource();
                vt.add(store);
                if (k5 == 1) {
                    String ss2 = ((JButton) e.getSource()).getText();
                    if (k1 == 1) {
                        if (k3 == 1) {
                            str1 = "";
                            k5 = 1;// 还原开关k5状态
                        }
                        str1 = str1 + ss2;
                        k3 = k3 + 1;
                        result_TextField.setText(str1); // 显示结果

                    } else if (k1 == 2) {
                        if (k4 == 1) {
                            str2 = "";
                            k5 = 1; // 还原开关k5的状态
                        }
                        str2 = str2 + ss2;
                        k4 = k4 + 1;
                        result_TextField.setText(str2);
                    }
                }
            k5 = k5 + 1;
            }
        }
        Listener_dy jt_dy = new Listener_dy(); // 监听等于键
		Listener jt = new Listener(); // 监听数字键
		Listener_signal jt_signal = new Listener_signal(); // 监听符号键
		Listener_clear jt_c = new Listener_clear(); // 监听清除键
		Listener_xiaos jt_xs = new Listener_xiaos(); // 监听小数点键
		button7.addActionListener(jt); // 监听数字键
		button8.addActionListener(jt); // 监听数字键
		button9.addActionListener(jt); // 监听数字键
		button_chu.addActionListener(jt_signal); // 监听符号键
		button4.addActionListener(jt); // 监听数字键
		button5.addActionListener(jt); // 监听数字键
		button6.addActionListener(jt); // 监听数字键
		button_cheng.addActionListener(jt_signal); // 监听符号键
		button1.addActionListener(jt); // 监听数字键
		button2.addActionListener(jt); // 监听数字键
		button3.addActionListener(jt); // 监听数字键
		button_jian.addActionListener(jt_signal); // 监听符号键
		button0.addActionListener(jt); // 监听数字键
		button_Dian.addActionListener(jt_xs); // 监听小数点键
		button_dy.addActionListener(jt_dy);
		button_jia.addActionListener(jt_signal); // 监听符号键
        clear_Button.addActionListener(jt_c); // 监听清除键
        // 窗体关闭事件的响应程序
		frame.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
	public void cal() {
		double a2; // 操作数1
		double b2; // 操作数2
		String c = signal; // 运算符
		double result2 = 0; // 运算结果
        // 手动只输入一个小数点的问题
		if (c.equals("")) {
			result_TextField.setText("Please input operator"); // 还没有输入符号，不能计算
		} else {
            // 可以进行计算
            // 手动只输入一个小数点的问题
			if (str1.equals("."))
				str1 = "0.0";
			if (str2.equals("."))
                str2 = "0.0";
            // 转换字符串为 double
			a2 = Double.valueOf(str1).doubleValue();
			b2 = Double.valueOf(str2).doubleValue();
			if (c.equals("+")) {
				result2 = a2 + b2;
			}
			if (c.equals("-")) {
				result2 = a2 - b2;
			}
			if (c.equals("*")) {
				BigDecimal m1 = new BigDecimal(Double.toString(a2));
			    BigDecimal m2 = new BigDecimal(Double.toString(b2));
			    result2 = m1.multiply(m2).doubleValue();
			}
			if (c.equals("/")) {
				if (b2 == 0) {
					result2 = 0;
				} else {
					result2 = a2 / b2;
				}
			}
			result = ((new Double(result2)).toString());
			result_TextField.setText(result);
		}
	}
	@SuppressWarnings("unused")
	public static void main(String[] args) {
	try {
			UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
		} catch (Exception e) {
			e.printStackTrace();
		}
		Calculator cal = new Calculator();
	}
}