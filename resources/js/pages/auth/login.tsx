import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Badge, Eye, EyeClosed, IdCard, Lock, LogIn } from 'lucide-react';
import { useState } from 'react';
import FormInput from '@/components/ext/form-input';
import FormInputWithIcon from '@/components/ext/form-input-with-icon';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {

    const [showPassword, setShowPassword] = useState(false);


    return (
        <>
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6 bg-white p-8 rounded-xl"
            >
                {({ processing, errors }) => (
                    <>

                        <div class="space-y-2">
                            <FormInputWithIcon
                                id="email"
                                name='email'
                                type='email'
                                tabIndex={1}
                                autoFocus
                                label='Official Registry ID'
                                className=" pl-10      "
                                placeholder="admin@abfi.com" required
                                icon={IdCard}
                            />
                            <InputError message={errors.email} />




                        </div>

                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <label
                                    class="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
                                    for="password">Password</label>
                            </div>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock />
                                </div>
                                <input type={showPassword ? 'text' : 'password'}
                                    class="block w-full pl-10 pr-12 py-3 bg-zinc-50 border-0 rounded-md focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 transition-all"
                                    id="password" name="password" placeholder="••••••••" required="" />
                                <button
                                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-primary transition-colors"
                                    type="button" onClick={() => setShowPassword((prev) => !prev)}>
                                    {showPassword ? (
                                        <EyeClosed className="size-4" />
                                    ) : (
                                        <Eye className="size-4" />
                                    )}

                                </button>
                            </div>
                            <InputError message={errors.password} />
                        </div>

                        <Button
                            size="xl"
                            className="w-full bg-primary text-white font-headline font-bold py-4 rounded-md shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                            type="submit">


                            {processing ? <Spinner /> : <> <span>Authenticate Session</span>
                                <LogIn />
                            </>

                            }
                        </Button>

                        {canResetPassword && (

                            <div
                                className="mt-3 pt-6 border-t border-outline-variant/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <TextLink className="text-xs font-medium text-primary hover:text-secondary underline underline-offset-4 decoration-surface-tint/30 transition-colors flex items-center"
                                    href={request()} tabIndex={5}>

                                    Forgot Password?
                                </TextLink>
                                {/* <a class="text-xs font-medium text-primary hover:text-secondary underline underline-offset-4 decoration-surface-tint/30 transition-colors flex items-center"
                        href="#">
                        <span class="material-symbols-outlined text-sm mr-1">support_agent</span>
                        Contact Support
                    </a> */}
                            </div>



                        )}


                        {/* <div className="text-center text-sm text-muted-foreground">
                            Don't have an account?{' '}
                            <TextLink href={register()} tabIndex={5}>
                                Sign up
                            </TextLink>
                        </div> */}
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
