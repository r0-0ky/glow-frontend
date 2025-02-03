'use client';

import { Button, Form, Input, Flex } from "antd/lib";
import { FC } from "react";
import s from './LoginPage.module.scss';
import Link from "next/link";
import cn from 'classnames';

export const LoginPage: FC = () => {
  const onFinish = (values: unknown) => {
    alert(JSON.stringify(values, null, 4));
  }

  return (
    <main className={s.container}>
      <Form
        name="basic"
        onFinish={onFinish}
        layout="vertical"
        style={{maxWidth: 430, width: '100%', border: '3px solid #131313', padding: '20px 30px 50px', position: 'relative', background: 'white'}}
      >
        <p className={cn(s.title, s.gradientText)}>Login to your account</p>
        <Form.Item
          label={<label className={s.label}>Email</label>}
          name="email"
          rules={[{ required: true, message: 'Please input your email' }, { type: 'email', message: 'Please input valid email' }]}
        >
          <Input style={{height: 50}} placeholder="Your email" />
        </Form.Item>
        <Form.Item
          label={<label className={s.label}>Password</label>}
          name="password"
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password style={{height: 50}} placeholder="Your password" />
        </Form.Item>
        <Form.Item style={{marginTop: 90}}>
          <Flex justify="center">
              <Flex vertical style={{width: 300}}>
                <p>Not have account? <Link className={s.gradientText} href='/register'>Register</Link></p>
                <Button htmlType="submit" style={{width: '100%', fontSize: 25, height: 50, fontWeight: 700}}>Login</Button>
              </Flex>
          </Flex>
        </Form.Item>
        <span className={s.frame_square} />
        <span className={s.frame_square} />
        <span className={s.frame_square} />
        <span className={s.frame_square} />
      </Form>
    </main>
  )
}